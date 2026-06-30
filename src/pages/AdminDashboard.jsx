import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Trash2, Copy, LogIn, Edit, Save } from 'lucide-react';
import teamDataJson from '../data/teamData.json';

// Corrected SHA-256 production hash for A01b02z26y25@AUISC
const TARGET_HASH = "be04cd6239e05b6a82ad866e5be5d00bffd2fa87da533bb855e41656c230b01a";
const TARGET_USERNAME = "AUISC@2022";

const processAndUploadImage = async (file, filename) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = async () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        const MAX_SIZE = 800;
        if (width > height && width > MAX_SIZE) {
          height *= MAX_SIZE / width;
          width = MAX_SIZE;
        } else if (height > MAX_SIZE) {
          width *= MAX_SIZE / height;
          height = MAX_SIZE;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const webpBase64 = canvas.toDataURL('image/webp', 0.8);
        try {
          const res = await fetch('/api/upload-image', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename, base64: webpBase64 })
          });
          const data = await res.json();
          if (data.success) resolve(data.path);
          else reject(data.error);
        } catch (err) {
          reject(err);
        }
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
};

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const sessionStr = localStorage.getItem('auisc_admin_session');
    if (sessionStr) {
      try {
        const session = JSON.parse(sessionStr);
        if (session.expiry > Date.now()) {
          return true;
        } else {
          localStorage.removeItem('auisc_admin_session');
        }
      } catch (e) {
        localStorage.removeItem('auisc_admin_session');
      }
    }
    return false;
  });
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [activeTab, setActiveTab] = useState('teams'); // 'teams' or 'pool'
  const [errorMsg, setErrorMsg] = useState('');

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('auisc_working_data');
    let parsedData = teamDataJson;
    if (saved) {
      try {
        parsedData = JSON.parse(saved);
      } catch (e) { }
    }

    // Auto-migrate old faculty format
    if (parsedData.facultyCoordinator && !Array.isArray(parsedData.facultyCoordinator)) {
      parsedData.facultyCoordinators = [parsedData.facultyCoordinator];
      delete parsedData.facultyCoordinator;
    } else if (!parsedData.facultyCoordinators) {
      parsedData.facultyCoordinators = [];
    }
    if (!parsedData.facultyTitle) parsedData.facultyTitle = "Faculty Coordinator";

    // Auto-migrate Executive Board leads to members since they have no leads
    const ebIndex = parsedData.teams.findIndex(t => t.teamName === "Executive Board");
    if (ebIndex !== -1 && parsedData.teams[ebIndex].leads && parsedData.teams[ebIndex].leads.length > 0) {
      const eb = parsedData.teams[ebIndex];
      eb.members = [...eb.leads, ...(eb.members || [])];
      eb.leads = [];
    }

    return parsedData;
  });

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('auisc_working_data', JSON.stringify(data));
    window.dispatchEvent(new Event('auisc_data_updated'));
  }, [data]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (usernameInput !== TARGET_USERNAME) {
      setErrorMsg('Invalid credentials');
      return;
    }
    const msgUint8 = new TextEncoder().encode(passwordInput);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    if (hashHex === TARGET_HASH) {
      setIsAuthenticated(true);
      setErrorMsg('');
      const expiry = Date.now() + 2 * 24 * 60 * 60 * 1000; // 2 days
      localStorage.setItem('auisc_admin_session', JSON.stringify({ valid: true, expiry }));
    } else {
      setErrorMsg('Invalid credentials');
    }
  };

  const publishData = async () => {
    if (window.confirm("WARNING: This will permanently overwrite the live codebase with your current dashboard state. Are you sure you want to deploy these changes?")) {
      try {
        const res = await fetch('/api/publish-data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data, null, 2)
        });
        if (res.ok) alert("Successfully deployed to live! The website will now reflect these changes, and a backup has been saved.");
        else alert("Failed to publish data.");
      } catch (err) {
        alert("Error publishing data: " + err.message);
      }
    }
  };

  const backupData = async () => {
    try {
      const res = await fetch('/api/backup-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data, null, 2)
      });
      if (res.ok) alert("Data successfully backed up to the server.");
      else alert("Failed to backup data.");
    } catch (err) {
      alert("Error backing up data: " + err.message);
    }
  };

  const resetData = async () => {
    if (window.confirm('Are you sure you want to discard unsaved changes and restore the last backed up or published state?')) {
      try {
        const res = await fetch('/api/get-backup');
        if (res.ok) {
          const backup = await res.json();
          localStorage.setItem('auisc_working_data', JSON.stringify(backup));
          window.location.reload();
        } else {
          alert("Failed to fetch backup data.");
        }
      } catch (err) {
        alert("Error retrieving backup: " + err.message);
      }
    }
  };

  const moveItem = (arr, index, direction) => {
    const newArr = [...arr];
    if (direction === 'up' && index > 0) {
      [newArr[index - 1], newArr[index]] = [newArr[index], newArr[index - 1]];
    } else if (direction === 'down' && index < newArr.length - 1) {
      [newArr[index + 1], newArr[index]] = [newArr[index], newArr[index + 1]];
    }
    return newArr;
  };

  const moveTeam = (index, direction) => {
    const newTeams = moveItem(data.teams, index, direction);
    setData({ ...data, teams: newTeams });
  };

  const updateTeamName = (teamIndex, newName) => {
    const newTeams = [...data.teams];
    newTeams[teamIndex].teamName = newName;
    setData({ ...data, teams: newTeams });
  };

  const addNewTeam = () => {
    let num = data.teams.length + 1;
    while (data.teams.some(t => t.id === `t${num}`)) {
      num++;
    }
    const newId = `t${num}`;
    const newTeams = [...data.teams, { id: newId, teamName: "New Team", leads: [], members: [] }];
    setData({ ...data, teams: newTeams });

    setTimeout(() => {
      const el = document.getElementById(`team-card-${newId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-4', 'ring-purple-500', 'ring-offset-4', 'ring-offset-[#0f172a]', 'transition-all', 'duration-500');
        setTimeout(() => el.classList.remove('ring-4', 'ring-purple-500', 'ring-offset-4', 'ring-offset-[#0f172a]'), 2000);
      }
    }, 100);
  };

  const deleteTeam = (teamIndex) => {
    if (window.confirm("Are you sure you want to completely delete this team?")) {
      const newTeams = [...data.teams];
      newTeams.splice(teamIndex, 1);
      setData({ ...data, teams: newTeams });
    }
  };

  const moveMemberInTeam = (teamIndex, section, memberIndex, direction) => {
    const newTeams = [...data.teams];
    newTeams[teamIndex][section] = moveItem(newTeams[teamIndex][section], memberIndex, direction);
    setData({ ...data, teams: newTeams });
  };

  const removeMemberFromTeam = (teamIndex, section, memberIndex) => {
    const newTeams = [...data.teams];
    newTeams[teamIndex][section].splice(memberIndex, 1);
    setData({ ...data, teams: newTeams });
  };

  const swapMemberInTeam = (teamIndex, section, memberIndex, newSlug) => {
    const newTeams = [...data.teams];
    newTeams[teamIndex][section][memberIndex] = newSlug;
    setData({ ...data, teams: newTeams });
  };

  const addMemberToTeam = (teamIndex, section, slug) => {
    if (!slug) return;
    const newTeams = [...data.teams];
    const team = newTeams[teamIndex];
    if (!team.leads) team.leads = [];
    if (!team.members) team.members = [];

    const otherSection = section === 'leads' ? 'members' : 'leads';
    team[otherSection] = team[otherSection].filter(id => id !== slug);

    if (!team[section].includes(slug)) {
      team[section].push(slug);
    }
    setData({ ...data, teams: newTeams });
  };

  const hardDeleteMember = (slug) => {
    if (!window.confirm(`Are you sure you want to permanently delete member '${slug}'? This will remove them from all assigned teams.`)) return;
    const newPool = data.membersPool.filter(m => m.id !== slug);
    const newTeams = data.teams.map(t => ({
      ...t,
      leads: t.leads ? t.leads.filter(id => id !== slug) : [],
      members: t.members ? t.members.filter(id => id !== slug) : []
    }));
    setData({ ...data, membersPool: newPool, teams: newTeams });
  };

  const updateMemberPool = (oldSlug, updatedMember) => {
    const newSlug = updatedMember.id;
    const newPool = data.membersPool.map(m => m.id === oldSlug ? updatedMember : m);

    let newTeams = data.teams;
    if (oldSlug !== newSlug) {
      newTeams = data.teams.map(t => ({
        ...t,
        leads: t.leads ? t.leads.map(id => id === oldSlug ? newSlug : id) : [],
        members: t.members ? t.members.map(id => id === oldSlug ? newSlug : id) : []
      }));
    }

    setData({ ...data, membersPool: newPool, teams: newTeams });
  };

  const getUsedSlugs = () => {
    const used = new Set();
    data.teams.forEach(team => {
      if (team.leads) team.leads.forEach(slug => used.add(slug));
      if (team.members) team.members.forEach(slug => used.add(slug));
    });
    return used;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-[#0f172a] text-white flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl w-full max-w-md z-10"
        >
          <div className="text-center mb-8">
            <LogIn className="w-12 h-12 mx-auto text-purple-400 mb-4" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Secure Access</h2>
            <p className="text-gray-400 mt-2">AUISC Admin Dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
              <input
                type="text"
                value={usernameInput}
                onChange={e => setUsernameInput(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                value={passwordInput}
                onChange={e => setPasswordInput(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
            </div>
            {errorMsg && <p className="text-red-400 text-sm text-center">{errorMsg}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-lg transition-all shadow-lg shadow-purple-500/30"
            >
              Authenticate
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const getMemberObj = (slug) => data.membersPool.find(m => m.id === slug) || { name: 'Unknown Profile', image: '' };

  const sortedMembers = [...data.membersPool].sort((a, b) => a.name.localeCompare(b.name));

  const TeamHeader = ({ team, teamIndex }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(team.teamName);

    const handleSave = () => {
      updateTeamName(teamIndex, name);
      setIsEditing(false);
    };

    return (
      <div className="flex-1 flex items-center gap-2 group">
        {isEditing ? (
          <div className="flex items-center gap-2 w-full max-w-sm">
            <input
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
              className="text-2xl font-bold bg-black/50 text-white outline-none border border-white/20 rounded px-2 py-1 w-full"
            />
            <button onClick={handleSave} className="text-green-400 hover:text-green-300 p-1"><Save size={18} /></button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{team.teamName}</h2>
              <span className="text-xs text-gray-500 font-mono block mt-1">ID: {team.id}</span>
            </div>
            <button onClick={() => setIsEditing(true)} className="text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity p-1 ml-2">
              <Edit size={16} />
            </button>
            <button onClick={() => deleteTeam(teamIndex)} className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity p-1 ml-auto" title="Delete Team">
              <Trash2 size={16} />
            </button>
          </div>
        )}
      </div>
    );
  };



  const EditFacultySection = () => {
    const [titleEditing, setTitleEditing] = useState(false);
    const [title, setTitle] = useState(data.facultyTitle || "Faculty Coordinator");

    const saveTitle = () => {
      setData({ ...data, facultyTitle: title });
      setTitleEditing(false);
    };

    const addFc = () => {
      setData({ ...data, facultyCoordinators: [...data.facultyCoordinators, { name: 'New Faculty', role: 'Role', image: '' }] });
    };

    const updateFc = (index, field, value) => {
      const newFc = [...data.facultyCoordinators];
      newFc[index][field] = value;
      setData({ ...data, facultyCoordinators: newFc });
    };

    const deleteFc = (index) => {
      if (window.confirm("Delete this faculty coordinator?")) {
        const newFc = [...data.facultyCoordinators];
        newFc.splice(index, 1);
        setData({ ...data, facultyCoordinators: newFc });
      }
    };

    const handleFcImageChange = async (index, file) => {
      if (!file) return;
      const slug = data.facultyCoordinators[index].name.toLowerCase().replace(/[^a-z0-9]/g, '') || `faculty_${Date.now()}`;
      try {
        const finalImagePath = await processAndUploadImage(file, `${slug}.webp`);
        updateFc(index, 'image', finalImagePath);
      } catch (err) {
        alert("Image upload failed: " + err);
      }
    };

    return (
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl relative mb-8">
        <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
          {titleEditing ? (
            <div className="flex items-center gap-2 w-full max-w-sm">
              <input value={title} onChange={e => setTitle(e.target.value)} autoFocus className="text-2xl font-bold bg-black/50 text-white outline-none border border-white/20 rounded px-2 py-1 w-full" />
              <button onClick={saveTitle} className="text-green-400 p-1"><Save size={18} /></button>
            </div>
          ) : (
            <div className="flex items-center gap-2 group">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{data.facultyTitle}</h2>
              <button onClick={() => setTitleEditing(true)} className="text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 p-1"><Edit size={16} /></button>
            </div>
          )}
          <button onClick={addFc} className="bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded text-sm font-semibold hover:bg-purple-500/30 border border-purple-500/30">+ Add Faculty</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.facultyCoordinators.map((fc, i) => (
            <div key={i} className="bg-black/30 p-4 rounded-xl border border-white/10 flex items-start gap-4 relative">
              <button onClick={() => deleteFc(i)} className="absolute top-2 right-2 text-red-400 hover:bg-red-400/10 p-1.5 rounded"><Trash2 size={16} /></button>
              <img src={fc.image ? (fc.image.startsWith('/') ? fc.image : `/${fc.image}`) : 'https://via.placeholder.com/150'} className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/50 flex-shrink-0" />
              <div className="flex-1 space-y-2 pr-6 min-w-0">
                <div><label className="text-[10px] text-gray-500 uppercase font-bold">Name</label><input value={fc.name} onChange={e => updateFc(i, 'name', e.target.value)} className="bg-white/5 text-white text-sm px-2 py-1 rounded outline-none border border-white/10 w-full focus:border-purple-500" /></div>
                <div><label className="text-[10px] text-gray-500 uppercase font-bold">Designation</label><input value={fc.role} onChange={e => updateFc(i, 'role', e.target.value)} className="bg-white/5 text-white text-sm px-2 py-1 rounded outline-none border border-white/10 w-full focus:border-purple-500" /></div>
                <div>
                  <label className="text-[10px] text-gray-500 uppercase font-bold flex justify-between items-center mb-1">
                    Image Path
                    <label className="text-purple-400 hover:text-purple-300 cursor-pointer flex items-center gap-1">
                      <Edit size={10} /> Upload
                      <input type="file" accept="image/*" onChange={e => handleFcImageChange(i, e.target.files[0])} className="hidden" />
                    </label>
                  </label>
                  <input value={fc.image} onChange={e => updateFc(i, 'image', e.target.value)} className="bg-white/5 text-white text-sm px-2 py-1 rounded outline-none border border-white/10 w-full focus:border-purple-500" />
                </div>
              </div>
            </div>
          ))}
          {data.facultyCoordinators.length === 0 && <p className="text-gray-500 italic col-span-2 text-sm">No faculty coordinators added.</p>}
        </div>
      </div>
    );
  };



  const MemberCard = ({ slug, index, teamIndex, section }) => {
    const member = getMemberObj(slug);
    return (
      <div className="flex flex-col gap-3 bg-white/5 p-4 rounded-xl border border-white/10 transition-colors hover:bg-white/10 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] max-w-sm">
        <div className="flex items-center gap-4">
          <img src={member.image ? (member.image.startsWith('/') ? member.image : `/${member.image}`) : 'https://via.placeholder.com/150'} alt={member.name} className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/50 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-white text-sm truncate">{member.name}</p>
            <p className="text-xs text-gray-400 truncate">{slug}</p>
          </div>
          <div className="flex flex-col gap-1 ml-auto">
            <button onClick={() => moveMemberInTeam(teamIndex, section, index, 'up')} className="text-gray-400 hover:text-white bg-black/30 rounded p-1"><ChevronUp size={14} /></button>
            <button onClick={() => moveMemberInTeam(teamIndex, section, index, 'down')} className="text-gray-400 hover:text-white bg-black/30 rounded p-1"><ChevronDown size={14} /></button>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-white/10 pt-3 mt-1">
          <select
            className="bg-black/40 text-xs text-white border border-white/20 rounded p-2 outline-none flex-1 truncate"
            value={slug}
            onChange={(e) => swapMemberInTeam(teamIndex, section, index, e.target.value)}
          >
            {sortedMembers.map(m => <option key={m.id} value={m.id} className="bg-slate-800">{m.name} ({m.id})</option>)}
          </select>
          <button onClick={() => removeMemberFromTeam(teamIndex, section, index)} className="text-red-400 hover:text-red-300 p-2 bg-red-400/10 rounded flex-shrink-0" title="Remove from team">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    );
  };

  const EditMemberPoolCard = ({ member }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedMember, setEditedMember] = useState(member);
    const [isUploadingImage, setIsUploadingImage] = useState(false);

    const handleSave = () => {
      updateMemberPool(member.id, editedMember);
      setEditMode(false);
    };

    const handleImageChange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      setIsUploadingImage(true);
      try {
        const finalImagePath = await processAndUploadImage(file, `${editedMember.id}.webp`);
        setEditedMember({ ...editedMember, image: finalImagePath });
      } catch (err) {
        alert("Image upload failed: " + err);
      }
      setIsUploadingImage(false);
    };

    return (
      <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col gap-3 transition-colors hover:bg-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <img src={editedMember.image ? (editedMember.image.startsWith('/') ? editedMember.image : `/${editedMember.image}`) : 'https://via.placeholder.com/150'} alt={editedMember.name} className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/50 flex-shrink-0" />
            <div className="min-w-0">
              {editMode ? (
                <div className="space-y-1">
                  <input
                    type="text"
                    value={editedMember.name}
                    onChange={e => setEditedMember({ ...editedMember, name: e.target.value })}
                    className="bg-black/50 text-white text-sm px-2 py-1 rounded outline-none border border-white/20 w-full"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    value={editedMember.id}
                    onChange={e => setEditedMember({ ...editedMember, id: e.target.value })}
                    className="bg-black/50 text-white text-xs px-2 py-1 rounded outline-none border border-white/20 w-full"
                    placeholder="Slug ID"
                  />
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-sm"><span className="text-gray-400">Name:</span> <span className="font-semibold text-white">{editedMember.name}</span></p>
                  <p className="text-xs font-mono"><span className="text-gray-400">Unique ID:</span> <span className="text-gray-300">{editedMember.id}</span></p>
                  {editedMember.role && (
                    <p className="text-xs"><span className="text-gray-400">Designation:</span> <span className="text-blue-300">{editedMember.role}</span></p>
                  )}
                  {editedMember.linkedin && (
                    <p className="text-xs truncate max-w-[200px]"><span className="text-gray-400">LinkedIn:</span> <a href={editedMember.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{editedMember.linkedin}</a></p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-2 ml-2 flex-shrink-0">
            {editMode ? (
              <button onClick={handleSave} className="text-green-400 hover:text-green-300 bg-green-400/10 p-1.5 rounded"><Save size={16} /></button>
            ) : (
              <button onClick={() => setEditMode(true)} className="text-blue-400 hover:text-blue-300 bg-blue-400/10 p-1.5 rounded"><Edit size={16} /></button>
            )}
            <button onClick={() => hardDeleteMember(member.id)} className="text-red-400 hover:text-red-300 bg-red-400/10 p-1.5 rounded"><Trash2 size={16} /></button>
          </div>
        </div>

        {editMode && (
          <div className="text-xs space-y-2 mt-2 pt-2 border-t border-white/10">
            <div>
              <label className="block text-gray-400 mb-1">Designation / Role (optional)</label>
              <input
                type="text"
                value={editedMember.role || ''}
                onChange={e => setEditedMember({ ...editedMember, role: e.target.value })}
                className="bg-black/50 text-white px-2 py-1.5 rounded outline-none border border-white/20 w-full"
                placeholder="e.g. Research And Development Team Head"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">LinkedIn URL (optional)</label>
              <input
                type="text"
                value={editedMember.linkedin || ''}
                onChange={e => setEditedMember({ ...editedMember, linkedin: e.target.value })}
                className="bg-black/50 text-white px-2 py-1.5 rounded outline-none border border-white/20 w-full focus:border-blue-500"
                placeholder="https://linkedin.com/in/..."
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1 flex justify-between items-center">
                Image Path
                <label className="text-purple-400 hover:text-purple-300 text-xs cursor-pointer flex items-center gap-1">
                  <Edit size={12} /> {isUploadingImage ? 'Uploading...' : 'Upload New'}
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </label>
              <input
                type="text"
                value={editedMember.image}
                onChange={e => setEditedMember({ ...editedMember, image: e.target.value })}
                className="bg-black/50 text-white px-2 py-1.5 rounded outline-none border border-white/20 w-full"
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  const AddMemberModal = ({ onClose, onAdd }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [slug, setSlug] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [file, setFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
      if (name && !slug) {
        setSlug(name.toLowerCase().replace(/[^a-z0-9]/g, ''));
      }
    }, [name]);

    const handleSave = async () => {
      if (!name || !slug) return alert("Name and Slug are required.");
      let finalImagePath = '';
      if (file) {
        setIsUploading(true);
        try {
          finalImagePath = await processAndUploadImage(file, `${slug}.webp`);
        } catch (e) {
          alert("Image upload failed: " + e);
          setIsUploading(false);
          return;
        }
        setIsUploading(false);
      }

      onAdd({
        id: slug,
        name,
        role,
        image: finalImagePath,
        linkedin
      });
      onClose();
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
        <div className="bg-slate-900 border border-white/20 rounded-2xl p-6 shadow-2xl w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Add New Member</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Full Name</label>
              <input value={name} onChange={e => setName(e.target.value)} className="w-full bg-black/50 text-white px-3 py-2 rounded border border-white/20 outline-none focus:border-blue-500" placeholder="e.g. John Doe" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Unique Slug ID (used for filename)</label>
              <input value={slug} onChange={e => setSlug(e.target.value)} className="w-full bg-black/50 text-white px-3 py-2 rounded border border-white/20 outline-none focus:border-blue-500 font-mono" placeholder="e.g. johndoe" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Designation (optional)</label>
              <input value={role} onChange={e => setRole(e.target.value)} className="w-full bg-black/50 text-white px-3 py-2 rounded border border-white/20 outline-none focus:border-blue-500" placeholder="e.g. Developer" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">LinkedIn URL (optional)</label>
              <input value={linkedin} onChange={e => setLinkedin(e.target.value)} className="w-full bg-black/50 text-white px-3 py-2 rounded border border-white/20 outline-none focus:border-blue-500" placeholder="https://linkedin.com/in/..." />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Profile Picture (Auto-compressed to .webp)</label>
              <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} className="w-full bg-black/50 text-white px-3 py-2 rounded border border-white/20 outline-none" />
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button onClick={onClose} className="px-4 py-2 rounded text-gray-400 hover:text-white transition-colors">Cancel</button>
            <button onClick={handleSave} disabled={isUploading} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-semibold transition-colors disabled:opacity-50 flex items-center gap-2">
              {isUploading ? 'Processing...' : 'Save Member'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-32 bg-[#0f172a] text-white relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Admin Dashboard
            </h1>
            <p className="text-gray-300 mt-2">Visual Configuration Manager</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="flex flex-col gap-2">
              <button
                onClick={resetData}
                className="flex items-center justify-center gap-2 bg-red-500/20 text-red-400 hover:bg-red-500/30 px-4 py-2 rounded-xl font-bold transition-all border border-red-500/30 text-sm"
              >
                Reset to Backed Up
              </button>
              <button
                onClick={backupData}
                className="flex items-center justify-center gap-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 px-4 py-2 rounded-xl font-bold transition-all border border-blue-500/30 text-sm"
              >
                <Save size={16} /> Backup Data
              </button>
            </div>
            <button
              onClick={publishData}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-6 py-4 rounded-xl font-bold shadow-lg shadow-green-500/30 transition-all h-full"
            >
              <Copy size={20} /> Publish to Live
            </button>
          </div>
        </motion.div>

        {/* Dashboard Tabs */}
        <div className="flex gap-4 mb-8">
          {['teams', 'pool'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === tab
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/30'
                : 'bg-white/5 hover:bg-white/10 text-gray-400'
                }`}
            >
              {tab === 'teams' ? 'Team Configurations' : 'MEMBERS DATA CRUD'}
            </button>
          ))}
        </div>

        {activeTab === 'teams' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <EditFacultySection />
            <div className="flex justify-end">
              <button onClick={addNewTeam} className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg font-semibold hover:bg-blue-500/30 transition-colors border border-blue-500/30">
                + Add New Team Configuration
              </button>
            </div>
            {data.teams.map((team, teamIndex) => (
              <div key={team.id} id={`team-card-${team.id}`} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl relative transition-all duration-500">
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6 gap-4">
                  <TeamHeader team={team} teamIndex={teamIndex} />
                  <div className="flex items-center gap-3">
                    <button onClick={() => moveTeam(teamIndex, 'up')} className="flex items-center gap-1 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded border border-white/10 text-sm font-medium transition-colors">
                      <ChevronUp size={16} /> Move Up
                    </button>
                    <button onClick={() => moveTeam(teamIndex, 'down')} className="flex items-center gap-1 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded border border-white/10 text-sm font-medium transition-colors">
                      <ChevronDown size={16} /> Move Down
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  {/* Leads */}
                  {team.teamName !== "Executive Board" && (
                    <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-purple-300">Team Leads</h3>
                        <select
                          className="bg-purple-500/20 text-xs text-purple-200 border border-purple-500/30 rounded p-1.5 outline-none font-medium cursor-pointer max-w-[150px]"
                          onChange={(e) => { addMemberToTeam(teamIndex, 'leads', e.target.value); e.target.value = ''; }}
                          defaultValue=""
                        >
                          <option value="" disabled className="bg-slate-800">Add Lead...</option>
                          {sortedMembers.map(m => <option key={m.id} value={m.id} className="bg-slate-800">{m.name} ({m.id})</option>)}
                        </select>
                      </div>
                      <div className="flex flex-wrap gap-4 mt-3 justify-center md:justify-start">
                        {team.leads?.map((slug, index) => (
                          <MemberCard key={`lead-${slug}-${index}`} slug={slug} index={index} teamIndex={teamIndex} section="leads" />
                        ))}
                        {(!team.leads || team.leads.length === 0) && <p className="text-sm text-gray-500 italic py-2 w-full text-center">No leads assigned</p>}
                      </div>
                    </div>
                  )}

                  {/* Members */}
                  <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-blue-300">Team Members</h3>
                      <select
                        className="bg-blue-500/20 text-xs text-blue-200 border border-blue-500/30 rounded p-1.5 outline-none font-medium cursor-pointer max-w-[150px]"
                        onChange={(e) => { addMemberToTeam(teamIndex, 'members', e.target.value); e.target.value = ''; }}
                        defaultValue=""
                      >
                        <option value="" disabled className="bg-slate-800">Add Member...</option>
                        {sortedMembers.map(m => <option key={m.id} value={m.id} className="bg-slate-800">{m.name} ({m.id})</option>)}
                      </select>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-3 justify-center md:justify-start">
                      {team.members?.map((slug, index) => (
                        <MemberCard key={`mem-${slug}-${index}`} slug={slug} index={index} teamIndex={teamIndex} section="members" />
                      ))}
                      {(!team.members || team.members.length === 0) && <p className="text-sm text-gray-500 italic py-2 w-full text-center">No members assigned</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'pool' && (() => {
          const usedSlugs = getUsedSlugs();
          const usedMembers = [...data.membersPool].filter(m => usedSlugs.has(m.id)).sort((a, b) => a.name.localeCompare(b.name));
          const unusedMembers = [...data.membersPool].filter(m => !usedSlugs.has(m.id)).sort((a, b) => a.name.localeCompare(b.name));

          return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold">MEMBERS DATA CRUD</h2>
                    <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full font-semibold border border-blue-500/30">
                      {usedMembers.length} Active Profiles
                    </span>
                  </div>
                  <button onClick={() => setIsAddModalOpen(true)} className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg font-semibold hover:bg-blue-500/30 transition-colors border border-blue-500/30">
                    + Add New Member
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {usedMembers.map(member => (
                    <EditMemberPoolCard key={member.id} member={member} />
                  ))}
                </div>
              </div>

              {unusedMembers.length > 0 && (
                <div className="bg-red-500/5 backdrop-blur-lg border border-red-500/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 opacity-50"></div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                      <h2 className="text-xl font-bold text-red-400">Unused Members</h2>
                      <span className="bg-red-500/20 text-red-300 px-4 py-1.5 rounded-full font-semibold border border-red-500/30">
                        {unusedMembers.length} Unassigned
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {unusedMembers.map(member => (
                      <EditMemberPoolCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })()}

        {isAddModalOpen && (
          <AddMemberModal
            onClose={() => setIsAddModalOpen(false)}
            onAdd={(newMember) => setData({ ...data, membersPool: [...data.membersPool, newMember] })}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;