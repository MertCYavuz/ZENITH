// =========================================================
// DOM ELEMENTS
// =========================================================
const welcomeScreen = document.getElementById('welcomeScreen');
const appScreen = document.getElementById('appScreen');
const startButton = document.getElementById('startButton');
const toastContainer = document.getElementById('toastContainer');

const btnNewDailyTask = document.getElementById('btnNewDailyTask');
const currentDateDisplay = document.getElementById('currentDateDisplay');
const pageTitle = document.getElementById('pageTitle');

// Streak Elements
const streakBadge = document.getElementById('streakBadge');
const streakCount = document.getElementById('streakCount');

// Feature #2: XP, Level & Rank Elements
const xpRankCard = document.getElementById('xpRankCard');
const xpLevelBadge = document.getElementById('xpLevelBadge');
const xpRankTitle = document.getElementById('xpRankTitle');
const xpNumbers = document.getElementById('xpNumbers');
const xpBarFill = document.getElementById('xpBarFill');

// Feature #14: Big Day / Exam Countdown Elements
const btnBigDayCard = document.getElementById('btnBigDayCard');
const bigDayTitleDisplay = document.getElementById('bigDayTitleDisplay');
const bigDayDateDisplay = document.getElementById('bigDayDateDisplay');
const bigDayDaysLeft = document.getElementById('bigDayDaysLeft');
const bigDayModal = document.getElementById('bigDayModal');
const bigDayCloseBtn = document.getElementById('bigDayCloseBtn');
const bigDayForm = document.getElementById('bigDayForm');
const bigDayTitleInput = document.getElementById('bigDayTitleInput');
const bigDayDateInput = document.getElementById('bigDayDateInput');

// Feature #8, #16, #18: Header Action Elements
const btnDailyGoalRing = document.getElementById('btnDailyGoalRing');
const goalRingCircle = document.getElementById('goalRingCircle');
const goalRingText = document.getElementById('goalRingText');
const btnWaterTracker = document.getElementById('btnWaterTracker');
const waterCountText = document.getElementById('waterCountText');
const btnDailyWrapUp = document.getElementById('btnDailyWrapUp');

// Feature #3 (Original): Mini Mode Elements
const btnMiniMode = document.getElementById('btnMiniMode');
const miniWidgetBar = document.getElementById('miniWidgetBar');
const miniTaskTitle = document.getElementById('miniTaskTitle');
const miniTimerDisplay = document.getElementById('miniTimerDisplay');
const miniBtnPlayPause = document.getElementById('miniBtnPlayPause');
const miniBtnBreak = document.getElementById('miniBtnBreak');
const miniBtnExpand = document.getElementById('miniBtnExpand');

// Nav items
const navDailyTasks = document.getElementById('navDailyTasks');
const navCompleted = document.getElementById('navCompleted');
const navNotes = document.getElementById('navNotes');
const navAnalytics = document.getElementById('navAnalytics');
const btnCalendar = document.getElementById('btnCalendar');
const btnTime = document.getElementById('btnTime');

const dailyTaskBadge = document.getElementById('dailyTaskBadge');
const completedTaskBadge = document.getElementById('completedTaskBadge');
const notesCountBadge = document.getElementById('notesCountBadge');

// View panels
const tasksView = document.getElementById('tasksView');
const timeView = document.getElementById('timeView');
const calendarView = document.getElementById('calendarView');
const analyticsView = document.getElementById('analyticsView');
const notesView = document.getElementById('notesView');

// Tasks View Elements (#3 Priority/Category, #17 Kanban)
const categoryFilterBar = document.getElementById('categoryFilterBar');
const selectPrioritySort = document.getElementById('selectPrioritySort');
const btnLayoutGrid = document.getElementById('btnLayoutGrid');
const btnLayoutKanban = document.getElementById('btnLayoutKanban');

const taskGrid = document.getElementById('taskGrid');
const kanbanBoard = document.getElementById('kanbanBoard');
const kanbanColTodo = document.getElementById('kanbanColTodo');
const kanbanColProgress = document.getElementById('kanbanColProgress');
const kanbanColDone = document.getElementById('kanbanColDone');
const kanbanCountTodo = document.getElementById('kanbanCountTodo');
const kanbanCountProgress = document.getElementById('kanbanCountProgress');
const kanbanCountDone = document.getElementById('kanbanCountDone');

const emptyState = document.getElementById('emptyState');
const emptyTitle = document.getElementById('emptyTitle');
const emptyDesc = document.getElementById('emptyDesc');

// New Task Modal Elements
const taskModal = document.getElementById('taskModal');
const taskForm = document.getElementById('taskForm');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalCancelBtn = document.getElementById('modalCancelBtn');
const modalSubmitBtn = document.getElementById('modalSubmitBtn');
const taskNameInput = document.getElementById('taskNameInput');
const taskPrioritySelect = document.getElementById('taskPrioritySelect');
const taskCategorySelect = document.getElementById('taskCategorySelect');
const taskDescInput = document.getElementById('taskDescInput');
const subtaskAddInput = document.getElementById('subtaskAddInput');
const btnAddSubtaskModal = document.getElementById('btnAddSubtaskModal');
const modalSubtasksList = document.getElementById('modalSubtasksList');
const recurringDaysRow = document.getElementById('recurringDaysRow');

const btnGoalTypeTime = document.getElementById('btnGoalTypeTime');
const btnGoalTypeText = document.getElementById('btnGoalTypeText');
const goalTimePanel = document.getElementById('goalTimePanel');
const goalTextPanel = document.getElementById('goalTextPanel');
const taskHoursInput = document.getElementById('taskHoursInput');
const taskMinutesInput = document.getElementById('taskMinutesInput');
const taskTextGoalInput = document.getElementById('taskTextGoalInput');

// Time, Stopwatch, Countdown Timer & Pomodoro Elements
const liveDigitalClock = document.getElementById('liveDigitalClock');
const liveClockDate = document.getElementById('liveClockDate');
const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const btnModeStopwatch = document.getElementById('btnModeStopwatch');
const btnModeCountdown = document.getElementById('btnModeCountdown');
const btnModePomodoro = document.getElementById('btnModePomodoro');
const btnStrictFocus = document.getElementById('btnStrictFocus');
const countdownSetup = document.getElementById('countdownSetup');
const cdHoursInput = document.getElementById('cdHoursInput');
const cdMinutesInput = document.getElementById('cdMinutesInput');
const activeFocusBanner = document.getElementById('activeFocusBanner');
const activeFocusTaskName = document.getElementById('activeFocusTaskName');
const pomoPresets = document.getElementById('pomoPresets');
const btnSwStart = document.getElementById('btnSwStart');
const btnSwBreak = document.getElementById('btnSwBreak');
const breakBtnText = document.getElementById('breakBtnText');
const btnSwReset = document.getElementById('btnSwReset');
const breaksContainer = document.getElementById('breaksContainer');
const breaksList = document.getElementById('breaksList');
const noBreaksHint = document.getElementById('noBreaksHint');
const breaksSummary = document.getElementById('breaksSummary');
const totalBreakTime = document.getElementById('totalBreakTime');

// Feature #1: Ambient Sound Mixer Elements
const ambientVolumeSlider = document.getElementById('ambientVolumeSlider');

// Analytics Elements (#5 Heatmap, #12 Category Dist, #13 Reflections, #20 Export)
const analyticsRangeLabel = document.getElementById('analyticsRangeLabel');
const btnExportProgressCard = document.getElementById('btnExportProgressCard');
const metricFocusTime = document.getElementById('metricFocusTime');
const metricTasksDone = document.getElementById('metricTasksDone');
const metricTasksRatio = document.getElementById('metricTasksRatio');
const metricBreaksCount = document.getElementById('metricBreaksCount');
const metricBreaksTime = document.getElementById('metricBreaksTime');
const metricScore = document.getElementById('metricScore');
const barChartContainer = document.getElementById('barChartContainer');
const categoryDistContainer = document.getElementById('categoryDistContainer');
const sessionReflectionsList = document.getElementById('sessionReflectionsList');
const heatmapGrid = document.getElementById('heatmapGrid');

// Feature #7: Scratchpad & Sticky Notes Elements
const scratchpadTextarea = document.getElementById('scratchpadTextarea');
const scratchpadWordCount = document.getElementById('scratchpadWordCount');
const btnCopyScratchpad = document.getElementById('btnCopyScratchpad');
const btnClearScratchpad = document.getElementById('btnClearScratchpad');
const btnAddStickyNote = document.getElementById('btnAddStickyNote');
const stickyNotesGrid = document.getElementById('stickyNotesGrid');

// Feature #13: Session Reflection Modal Elements
const reflectionModal = document.getElementById('reflectionModal');
const reflectionModalTitle = document.getElementById('reflectionModalTitle');
const reflectionSubtitle = document.getElementById('reflectionSubtitle');
const starRatingRow = document.getElementById('starRatingRow');
const reflectionNoteInput = document.getElementById('reflectionNoteInput');
const btnSaveReflection = document.getElementById('btnSaveReflection');

// Feature #16: Daily Wrap-Up Modal Elements
const wrapUpModal = document.getElementById('wrapUpModal');
const wrapUpCloseBtn = document.getElementById('wrapUpCloseBtn');
const wrapUpContent = document.getElementById('wrapUpContent');
const btnWrapUpExportCard = document.getElementById('btnWrapUpExportCard');

// Calendar Elements
const calendarMonthYear = document.getElementById('calendarMonthYear');
const calendarGrid = document.getElementById('calendarGrid');
const btnCalPrev = document.getElementById('btnCalPrev');
const btnCalNext = document.getElementById('btnCalNext');
const btnCalToday = document.getElementById('btnCalToday');

// Settings Elements
const btnSettings = document.getElementById('btnSettings');
const settingsModal = document.getElementById('settingsModal');
const settingsCloseBtn = document.getElementById('settingsCloseBtn');
const selectThemeStyle = document.getElementById('selectThemeStyle');
const selectDailyGoalMins = document.getElementById('selectDailyGoalMins');
const toggleHealthNudge = document.getElementById('toggleHealthNudge');
const toggleLaunchStartup = document.getElementById('toggleLaunchStartup');
const toggle24Hour = document.getElementById('toggle24Hour');
const toggleSounds = document.getElementById('toggleSounds');
const toggleDailyReset = document.getElementById('toggleDailyReset');
const btnImportData = document.getElementById('btnImportData');
const importFileInput = document.getElementById('importFileInput');
const btnExportData = document.getElementById('btnExportData');
const btnClearData = document.getElementById('btnClearData');

// Day Detail / Agenda Modal Elements
const dayDetailModal = document.getElementById('dayDetailModal');
const dayDetailCloseBtn = document.getElementById('dayDetailCloseBtn');
const dayDetailDateTitle = document.getElementById('dayDetailDateTitle');
const btnOpenAddPlan = document.getElementById('btnOpenAddPlan');
const dayPlansList = document.getElementById('dayPlansList');
const noPlansMsg = document.getElementById('noPlansMsg');

// Add a Plan Modal Elements
const planModal = document.getElementById('planModal');
const planModalCloseBtn = document.getElementById('planModalCloseBtn');
const planCancelBtn = document.getElementById('planCancelBtn');
const planSubmitBtn = document.getElementById('planSubmitBtn');
const planForm = document.getElementById('planForm');
const planTargetDateDisplay = document.getElementById('planTargetDateDisplay');
const planTitleInput = document.getElementById('planTitleInput');
const planTimeInput = document.getElementById('planTimeInput');
const planDescInput = document.getElementById('planDescInput');

// =========================================================
// STATE & SETTINGS
// =========================================================
let tasks = JSON.parse(localStorage.getItem('daily_tasks') || '[]');
let calendarPlans = JSON.parse(localStorage.getItem('calendar_plans') || '{}');
let focusHistory = JSON.parse(localStorage.getItem('app_focus_history') || '[]');
let stickyNotes = JSON.parse(localStorage.getItem('zenith_sticky_notes') || '[]');
let userXP = parseInt(localStorage.getItem('zenith_user_xp') || '0', 10);
let bigDayData = JSON.parse(localStorage.getItem('zenith_big_day') || 'null');

let currentView = 'daily'; // 'daily' | 'completed' | 'notes' | 'time' | 'calendar' | 'analytics'
let selectedPlanDateStr = ''; // 'YYYY-MM-DD'
let currentAnalyticsTimeframe = 'weekly'; // 'weekly' | 'monthly' | 'yearly'
let activeCategoryFilter = 'all';
let activePrioritySort = 'newest';
let tasksLayoutMode = localStorage.getItem('zenith_tasks_layout') || 'grid'; // 'grid' | 'kanban'
let strictFocusMode = false;

// Streak State
let streakCountValue = parseInt(localStorage.getItem('app_streak_count') || '0', 10);
let lastStreakDate = localStorage.getItem('last_streak_date') || '';

let appSettings = Object.assign({
  theme: 'obsidian',
  accent: 'purple',
  clock24h: true,
  sounds: true,
  dailyReset: true,
  dailyGoalMins: 180,
  healthNudge: true,
  launchStartup: false
}, JSON.parse(localStorage.getItem('app_settings') || '{}'));

// Hydration State (Today)
let waterIntakeCount = parseInt(localStorage.getItem('today_water_count') || '0', 10);

// Modal Subtasks Builder temporary state
let modalSubtasks = [];

// Pending Session Reflection reference
let lastCompletedSessionIndex = -1;
let currentReflectionRating = 5;

// =========================================================
// FEATURE #6: NATIVE DESKTOP NOTIFICATIONS & IN-APP TOASTS
// =========================================================
function showToast(title, body = '', icon = '✨') {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'zenith-toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-body">
      <div class="toast-title">${escapeHtml(title)}</div>
      ${body ? `<div class="toast-desc">${escapeHtml(body)}</div>` : ''}
    </div>
  `;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(30px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 260);
  }, 4200);
}

function notifyUser(title, body = '', icon = '✨', sendNative = false) {
  showToast(title, body, icon);
  if (sendNative && appSettings.sounds && window.electronAPI && window.electronAPI.showNotification) {
    window.electronAPI.showNotification(title, body);
  }
}

// =========================================================
// FEATURE #2: XP, LEVEL & RANK SYSTEM (GAMIFICATION)
// =========================================================
const RANK_TITLES = [
  'Novice',
  'Apprentice',
  'Initiate',
  'Focused Scholar',
  'Time Architect',
  'Deep Work Adept',
  'Momentum Master',
  'Productivity Vanguard',
  'Grandmaster',
  'Zenith Apex'
];

function updateXPUI() {
  const level = Math.floor(userXP / 200) + 1;
  const xpIntoLevel = userXP % 200;
  const pct = Math.min(100, Math.round((xpIntoLevel / 200) * 100));
  const rankIdx = Math.min(RANK_TITLES.length - 1, Math.floor((level - 1) / 2));
  const rankName = RANK_TITLES[rankIdx];

  if (xpLevelBadge) xpLevelBadge.textContent = `LVL ${level}`;
  if (xpRankTitle) xpRankTitle.textContent = rankName;
  if (xpNumbers) xpNumbers.textContent = `${xpIntoLevel} / 200 XP`;
  if (xpBarFill) xpBarFill.style.width = `${pct}%`;
}

function addXP(amount, reason = '') {
  if (amount <= 0) return;
  const prevLevel = Math.floor(userXP / 200) + 1;
  userXP += amount;
  localStorage.setItem('zenith_user_xp', userXP.toString());
  const newLevel = Math.floor(userXP / 200) + 1;
  updateXPUI();

  if (newLevel > prevLevel) {
    const rankIdx = Math.min(RANK_TITLES.length - 1, Math.floor((newLevel - 1) / 2));
    playSound('complete');
    notifyUser(`Level Up! Reached LVL ${newLevel}`, `New Rank Unlocked: ${RANK_TITLES[rankIdx]} (+${amount} XP)`, '🏆', true);
  } else if (reason) {
    showToast(`+${amount} XP Earned`, reason, '⚡');
  }
}

// =========================================================
// WEB AUDIO API SOUND EFFECTS & FEATURE #1 AMBIENT MIXER
// =========================================================
function playSound(type) {
  if (!appSettings.sounds) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'complete') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } else if (type === 'break') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    }
  } catch (err) {}
}

// Feature #1: Procedural Web Audio API Ambient Soundscapes
let ambientAudioCtx = null;
let ambientMasterGain = null;
let activeAmbientNodes = [];
let currentAmbientSound = null; // 'rain' | 'brown' | 'binaural' | 'fire' | null

function stopAmbientSound() {
  activeAmbientNodes.forEach(node => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch (e) {}
  });
  activeAmbientNodes = [];
  currentAmbientSound = null;
  document.querySelectorAll('.btn-ambient').forEach(btn => btn.classList.remove('active'));
}

function startAmbientSound(type) {
  if (currentAmbientSound === type) {
    stopAmbientSound();
    return;
  }
  stopAmbientSound();

  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!ambientAudioCtx) {
      ambientAudioCtx = new AudioCtx();
    }
    if (ambientAudioCtx.state === 'suspended') {
      ambientAudioCtx.resume();
    }

    ambientMasterGain = ambientAudioCtx.createGain();
    const vol = ambientVolumeSlider ? (parseInt(ambientVolumeSlider.value, 10) / 100) : 0.4;
    ambientMasterGain.gain.setValueAtTime(vol * 0.35, ambientAudioCtx.currentTime);
    ambientMasterGain.connect(ambientAudioCtx.destination);

    if (type === 'rain' || type === 'brown' || type === 'fire') {
      const bufferSize = ambientAudioCtx.sampleRate * 3;
      const noiseBuffer = ambientAudioCtx.createBuffer(1, bufferSize, ambientAudioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);

      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        if (type === 'brown') {
          output[i] = (lastOut + (0.02 * white)) / 1.02;
          lastOut = output[i];
          output[i] *= 3.2;
        } else if (type === 'rain') {
          output[i] = (lastOut + (0.12 * white)) / 1.12;
          lastOut = output[i];
          output[i] *= 1.6;
        } else {
          // Cozy Fireplace: warm low rumble + subtle crackle impulses
          const crackle = Math.random() > 0.997 ? (Math.random() * 1.6) : 0;
          output[i] = ((lastOut + (0.04 * white)) / 1.04) * 2.2 + crackle * 0.35;
          lastOut = output[i] * 0.4;
        }
      }

      const whiteNoise = ambientAudioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ambientAudioCtx.createBiquadFilter();
      if (type === 'rain') {
        filter.type = 'bandpass';
        filter.frequency.value = 1100;
        filter.Q.value = 0.65;
      } else if (type === 'brown') {
        filter.type = 'lowpass';
        filter.frequency.value = 280;
      } else {
        filter.type = 'lowpass';
        filter.frequency.value = 520;
      }

      whiteNoise.connect(filter);
      filter.connect(ambientMasterGain);
      whiteNoise.start(0);
      activeAmbientNodes.push(whiteNoise, filter, ambientMasterGain);
    } else if (type === 'binaural') {
      // Alpha/Gamma 40Hz Binaural Focus Drone (200Hz Left + 240Hz Right)
      const oscLeft = ambientAudioCtx.createOscillator();
      const oscRight = ambientAudioCtx.createOscillator();
      const pannerLeft = ambientAudioCtx.createStereoPanner ? ambientAudioCtx.createStereoPanner() : null;
      const pannerRight = ambientAudioCtx.createStereoPanner ? ambientAudioCtx.createStereoPanner() : null;

      oscLeft.type = 'sine';
      oscRight.type = 'sine';
      oscLeft.frequency.setValueAtTime(200, ambientAudioCtx.currentTime);
      oscRight.frequency.setValueAtTime(240, ambientAudioCtx.currentTime);

      if (pannerLeft && pannerRight) {
        pannerLeft.pan.value = -0.8;
        pannerRight.pan.value = 0.8;
        oscLeft.connect(pannerLeft);
        oscRight.connect(pannerRight);
        pannerLeft.connect(ambientMasterGain);
        pannerRight.connect(ambientMasterGain);
        activeAmbientNodes.push(pannerLeft, pannerRight);
      } else {
        oscLeft.connect(ambientMasterGain);
        oscRight.connect(ambientMasterGain);
      }

      oscLeft.start();
      oscRight.start();
      activeAmbientNodes.push(oscLeft, oscRight, ambientMasterGain);
    }

    currentAmbientSound = type;
    document.querySelectorAll('.btn-ambient').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.sound === type);
    });
  } catch (e) {}
}

document.querySelectorAll('.btn-ambient').forEach(btn => {
  btn.addEventListener('click', () => {
    const soundType = btn.dataset.sound;
    startAmbientSound(soundType);
  });
});

if (ambientVolumeSlider) {
  ambientVolumeSlider.addEventListener('input', (e) => {
    const vol = parseInt(e.target.value, 10) / 100;
    if (ambientMasterGain && ambientAudioCtx) {
      ambientMasterGain.gain.setValueAtTime(vol * 0.35, ambientAudioCtx.currentTime);
    }
  });
}

// =========================================================
// SETTINGS APPLICATION
// =========================================================
function saveSettings() {
  localStorage.setItem('app_settings', JSON.stringify(appSettings));
}

function applySettings() {
  // Apply theme
  if (appSettings.theme === 'oled') {
    document.body.classList.add('theme-oled');
    if (selectThemeStyle) selectThemeStyle.value = 'oled';
  } else {
    document.body.classList.remove('theme-oled');
    if (selectThemeStyle) selectThemeStyle.value = 'obsidian';
  }

  // Apply accent to html, body and appScreen
  document.documentElement.setAttribute('data-accent', appSettings.accent);
  document.body.setAttribute('data-accent', appSettings.accent);
  if (appScreen) appScreen.setAttribute('data-accent', appSettings.accent);

  document.querySelectorAll('.swatch').forEach(sw => {
    sw.classList.toggle('active', sw.dataset.color === appSettings.accent);
  });

  // Apply switches & selects
  if (toggle24Hour) toggle24Hour.checked = !!appSettings.clock24h;
  if (toggleSounds) toggleSounds.checked = !!appSettings.sounds;
  if (toggleDailyReset) toggleDailyReset.checked = !!appSettings.dailyReset;
  if (selectDailyGoalMins) selectDailyGoalMins.value = String(appSettings.dailyGoalMins || 180);
  if (toggleHealthNudge) toggleHealthNudge.checked = appSettings.healthNudge !== false;
  if (toggleLaunchStartup) toggleLaunchStartup.checked = !!appSettings.launchStartup;

  updateGoalRing();

  if (currentView === 'analytics' && typeof renderAnalytics === 'function') {
    renderAnalytics(currentAnalyticsTimeframe);
  }
}

// =========================================================
// 00:00 DAILY RESET & STREAK LOGIC
// =========================================================
function getTodayDateString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getYesterdayDateString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function updateStreakDisplay() {
  if (streakCount) {
    streakCount.textContent = streakCountValue;
  }
}

function evaluateStreakOnStartup() {
  const todayStr = getTodayDateString();
  const yesterdayStr = getYesterdayDateString();
  const migratedV2 = localStorage.getItem('streak_login_migrated_v2');

  if (lastStreakDate !== todayStr) {
    if (lastStreakDate === yesterdayStr || (!lastStreakDate && streakCountValue > 0)) {
      streakCountValue = streakCountValue + 1;
    } else {
      streakCountValue = 1;
    }
    lastStreakDate = todayStr;
    localStorage.setItem('app_streak_count', streakCountValue.toString());
    localStorage.setItem('last_streak_date', lastStreakDate);
    localStorage.setItem('streak_login_migrated_v2', 'true');
  } else {
    if (!migratedV2 && streakCountValue === 1) {
      streakCountValue = 2;
      localStorage.setItem('app_streak_count', '2');
      localStorage.setItem('streak_login_migrated_v2', 'true');
    } else if (streakCountValue <= 0) {
      streakCountValue = 1;
      localStorage.setItem('app_streak_count', '1');
      localStorage.setItem('streak_login_migrated_v2', 'true');
    }
  }

  updateStreakDisplay();
}

function checkAndIncrementStreak() {
  evaluateStreakOnStartup();
}

function checkAndResetDailyTasks() {
  const lastActiveDate = localStorage.getItem('last_active_date');
  const todayStr = getTodayDateString();
  const todayDayOfWeek = new Date().getDay(); // 0 (Sun) - 6 (Sat)

  if (lastActiveDate && lastActiveDate !== todayStr) {
    if (appSettings.dailyReset) {
      tasks.forEach(task => {
        const shouldResetToday = !Array.isArray(task.recurringDays) ||
          task.recurringDays.length === 0 ||
          task.recurringDays.includes(todayDayOfWeek);

        if (shouldResetToday) {
          task.completed = false;
          task.status = 'todo';
          if (Array.isArray(task.subtasks)) {
            task.subtasks.forEach(st => { st.done = false; });
          }
        }
      });
      saveTasks();
    }

    // Auto-archive any accumulated work minutes from yesterday
    const prevElapsed = parseInt(localStorage.getItem('today_sw_elapsed') || '0', 10);
    if (prevElapsed >= 60000) {
      focusHistory.push({
        date: lastActiveDate,
        minutes: Math.floor(prevElapsed / 60000),
        task: 'Archived Work Session',
        category: 'Study',
        rating: 5,
        note: 'Auto-archived at midnight',
        timestamp: Date.now()
      });
      localStorage.setItem('app_focus_history', JSON.stringify(focusHistory));
    }

    // Reset daily work & hydration counters for new day
    localStorage.removeItem('today_sw_elapsed');
    localStorage.removeItem('today_break_records');
    localStorage.removeItem('today_total_break_ms');
    localStorage.setItem('today_water_count', '0');
    waterIntakeCount = 0;
    updateWaterUI();
  }

  localStorage.setItem('last_active_date', todayStr);
}

function scheduleMidnightReset() {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
  const msUntilMidnight = tomorrow.getTime() - now.getTime();

  setTimeout(() => {
    checkAndResetDailyTasks();
    evaluateStreakOnStartup();
    if (currentView === 'daily' || currentView === 'completed') {
      renderTasks();
    }
    updateDate();
    updateGoalRing();
    scheduleMidnightReset();
  }, msUntilMidnight);
}

// =========================================================
// FEATURE #8: DAILY FOCUS GOAL RING & FEATURE #18 WATER TRACKER
// =========================================================
function updateGoalRing() {
  if (!goalRingCircle || !goalRingText) return;
  const todayStr = getTodayDateString();
  const todayMins = typeof getMinutesForDate === 'function' ? getMinutesForDate(todayStr) : 0;
  const targetMins = Math.max(15, parseInt(appSettings.dailyGoalMins || 180, 10));
  const circumference = 88; // 2 * pi * 14 ≈ 87.96
  const ratio = Math.min(1, todayMins / targetMins);
  const offset = circumference - (ratio * circumference);

  goalRingCircle.style.strokeDashoffset = offset.toFixed(1);
  goalRingText.textContent = `${todayMins} / ${targetMins}m`;
}

if (btnDailyGoalRing) {
  btnDailyGoalRing.addEventListener('click', () => {
    playSound('click');
    settingsModal.classList.remove('hidden');
    if (selectDailyGoalMins) selectDailyGoalMins.focus();
  });
}

function updateWaterUI() {
  if (waterCountText) {
    waterCountText.textContent = `${waterIntakeCount} / 8`;
  }
}

if (btnWaterTracker) {
  btnWaterTracker.addEventListener('click', () => {
    playSound('click');
    waterIntakeCount++;
    localStorage.setItem('today_water_count', waterIntakeCount.toString());
    updateWaterUI();
    addXP(5, `Hydration logged (${waterIntakeCount}/8 glasses) 💧`);
  });

  btnWaterTracker.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    playSound('click');
    waterIntakeCount = 0;
    localStorage.setItem('today_water_count', '0');
    updateWaterUI();
    showToast('Water Counter Reset', 'Hydration tracker reset to 0 / 8', '💧');
  });
}

// Feature #18: Health, Hydration & 20-20-20 Eye Care Nudge (every 30 mins of active timer)
let activeFocusSecondsForHealth = 0;
setInterval(() => {
  const isFocusing = (swRunning || cdRunning || pomoRunning) && !inBreak;
  if (isFocusing && appSettings.healthNudge !== false) {
    activeFocusSecondsForHealth++;
    if (activeFocusSecondsForHealth >= 1800) { // 30 minutes
      activeFocusSecondsForHealth = 0;
      notifyUser(
        'Health & 20-20-20 Eye Care Nudge 👀💧',
        'You have been focusing for 30 minutes! Look 20 feet away for 20 seconds and take a sip of water.',
        '💧',
        true
      );
    }
  }
}, 1000);

// =========================================================
// FEATURE #14: BIG DAY / EXAM COUNTDOWN WIDGET
// =========================================================
function renderBigDay() {
  if (!bigDayTitleDisplay || !bigDayDateDisplay || !bigDayDaysLeft) return;
  if (!bigDayData || !bigDayData.title || !bigDayData.date) {
    bigDayTitleDisplay.textContent = 'Set Target Milestone';
    bigDayDateDisplay.textContent = 'Click to configure date';
    bigDayDaysLeft.textContent = '--';
    return;
  }

  bigDayTitleDisplay.textContent = bigDayData.title;
  bigDayDateDisplay.textContent = bigDayData.date;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const parts = bigDayData.date.split('-');
  const target = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  target.setHours(0, 0, 0, 0);

  const diffTime = target.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    bigDayDaysLeft.textContent = `D-${diffDays}`;
  } else if (diffDays === 0) {
    bigDayDaysLeft.textContent = 'TODAY';
  } else {
    bigDayDaysLeft.textContent = `+${Math.abs(diffDays)}d`;
  }
}

if (btnBigDayCard) {
  btnBigDayCard.addEventListener('click', () => {
    playSound('click');
    if (bigDayData) {
      bigDayTitleInput.value = bigDayData.title || '';
      bigDayDateInput.value = bigDayData.date || getTodayDateString();
    } else {
      bigDayTitleInput.value = '';
      bigDayDateInput.value = getTodayDateString();
    }
    bigDayModal.classList.remove('hidden');
    setTimeout(() => bigDayTitleInput.focus(), 50);
  });
}

if (bigDayCloseBtn) {
  bigDayCloseBtn.addEventListener('click', () => bigDayModal.classList.add('hidden'));
}

if (bigDayForm) {
  bigDayForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = bigDayTitleInput.value.trim();
    const date = bigDayDateInput.value;
    if (!title || !date) return;

    bigDayData = { title, date };
    localStorage.setItem('zenith_big_day', JSON.stringify(bigDayData));
    renderBigDay();
    bigDayModal.classList.add('hidden');
    playSound('complete');
    showToast('Target Milestone Saved', `${title} (${date})`, '⏳');
  });
}

// =========================================================
// LOCAL STORAGE & BADGES
// =========================================================
function saveTasks() {
  localStorage.setItem('daily_tasks', JSON.stringify(tasks));
}

function updateBadges() {
  const activeCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;

  if (dailyTaskBadge) dailyTaskBadge.textContent = activeCount;
  if (completedTaskBadge) completedTaskBadge.textContent = completedCount;
  if (notesCountBadge) notesCountBadge.textContent = stickyNotes.length;
}

function updateDate() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  if (currentDateDisplay) {
    currentDateDisplay.textContent = now.toLocaleDateString('en-US', options);
  }
}

// =========================================================
// VIEW SWITCHING & FEATURE #15 STRICT FOCUS LOCK GUARD
// =========================================================
function isAnyTimerRunning() {
  return (timerMode === 'stopwatch' && swRunning) ||
         (timerMode === 'countdown' && cdRunning) ||
         (timerMode === 'pomodoro' && pomoRunning);
}

function clearActiveNavs() {
  navDailyTasks.classList.remove('active');
  navCompleted.classList.remove('active');
  btnCalendar.classList.remove('active');
  btnTime.classList.remove('active');
  if (navAnalytics) navAnalytics.classList.remove('active');
  if (navNotes) navNotes.classList.remove('active');
}

function switchView(viewName) {
  // Feature #15: Strict Focus Lock check
  if (strictFocusMode && isAnyTimerRunning() && viewName !== 'time') {
    playSound('break');
    showToast('🔒 Strict Focus Lock Active', 'Pause your focus timer or unlock Strict Mode before leaving the Time view.', '🔒');
    return;
  }

  currentView = viewName;
  clearActiveNavs();

  tasksView.classList.add('hidden');
  timeView.classList.add('hidden');
  calendarView.classList.add('hidden');
  if (analyticsView) analyticsView.classList.add('hidden');
  if (notesView) notesView.classList.add('hidden');

  if (viewName === 'daily') {
    navDailyTasks.classList.add('active');
    pageTitle.textContent = 'Daily Tasks';
    tasksView.classList.remove('hidden');
    renderTasks();
  } else if (viewName === 'completed') {
    navCompleted.classList.add('active');
    pageTitle.textContent = 'Completed Tasks';
    tasksView.classList.remove('hidden');
    renderTasks();
  } else if (viewName === 'notes') {
    if (navNotes) navNotes.classList.add('active');
    pageTitle.textContent = 'Scratchpad & Pinned Notes';
    if (notesView) notesView.classList.remove('hidden');
    renderStickyNotes();
  } else if (viewName === 'time') {
    btnTime.classList.add('active');
    pageTitle.textContent = 'Time & Focus';
    timeView.classList.remove('hidden');
    updateLiveClock();
  } else if (viewName === 'calendar') {
    btnCalendar.classList.add('active');
    pageTitle.textContent = 'Calendar';
    calendarView.classList.remove('hidden');
    renderCalendar();
  } else if (viewName === 'analytics') {
    if (navAnalytics) navAnalytics.classList.add('active');
    pageTitle.textContent = 'Analytics & Insights';
    if (analyticsView) analyticsView.classList.remove('hidden');
    renderAnalytics(currentAnalyticsTimeframe);
  }
}

navDailyTasks.addEventListener('click', () => switchView('daily'));
navCompleted.addEventListener('click', () => switchView('completed'));
if (navNotes) navNotes.addEventListener('click', () => switchView('notes'));
btnTime.addEventListener('click', () => switchView('time'));
btnCalendar.addEventListener('click', () => switchView('calendar'));
if (navAnalytics) navAnalytics.addEventListener('click', () => switchView('analytics'));

// Feature #15: Strict Focus Lock Button
if (btnStrictFocus) {
  btnStrictFocus.addEventListener('click', () => {
    playSound('click');
    strictFocusMode = !strictFocusMode;
    btnStrictFocus.classList.toggle('active', strictFocusMode);
    if (strictFocusMode) {
      showToast('Strict Focus Lock Enabled 🔒', 'Navigation & reset are locked while the timer is actively running.', '🔒');
    } else {
      showToast('Strict Focus Lock Disabled 🔓', 'You can freely switch views at any time.', '🔓');
    }
  });
}

// =========================================================
// FEATURE #3, #4, #11, #17: TASK RENDERING (GRID & KANBAN)
// =========================================================
const PRIORITY_WEIGHT = { high: 3, medium: 2, low: 1 };
const DAY_SHORT_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

if (categoryFilterBar) {
  categoryFilterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-cat-filter');
    if (!btn) return;
    playSound('click');
    document.querySelectorAll('.btn-cat-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategoryFilter = btn.dataset.cat;
    renderTasks();
  });
}

if (selectPrioritySort) {
  selectPrioritySort.addEventListener('change', (e) => {
    playSound('click');
    activePrioritySort = e.target.value;
    renderTasks();
  });
}

function setTasksLayoutMode(mode) {
  tasksLayoutMode = mode;
  localStorage.setItem('zenith_tasks_layout', mode);
  if (btnLayoutGrid) btnLayoutGrid.classList.toggle('active', mode === 'grid');
  if (btnLayoutKanban) btnLayoutKanban.classList.toggle('active', mode === 'kanban');
  renderTasks();
}

if (btnLayoutGrid) {
  btnLayoutGrid.addEventListener('click', () => {
    playSound('click');
    setTasksLayoutMode('grid');
  });
}
if (btnLayoutKanban) {
  btnLayoutKanban.addEventListener('click', () => {
    playSound('click');
    setTasksLayoutMode('kanban');
  });
}

function getFilteredAndSortedTasks(onlyCompletedState = null) {
  let list = tasks.slice();

  if (onlyCompletedState !== null) {
    list = list.filter(t => Boolean(t.completed) === onlyCompletedState);
  }

  if (activeCategoryFilter !== 'all') {
    list = list.filter(t => (t.category || 'Study') === activeCategoryFilter);
  }

  if (activePrioritySort === 'priority') {
    list.sort((a, b) => {
      const wa = PRIORITY_WEIGHT[a.priority || 'medium'] || 2;
      const wb = PRIORITY_WEIGHT[b.priority || 'medium'] || 2;
      return wb - wa;
    });
  }

  return list;
}

function renderTasks() {
  updateBadges();
  updateGoalRing();

  if (btnLayoutGrid) btnLayoutGrid.classList.toggle('active', tasksLayoutMode === 'grid');
  if (btnLayoutKanban) btnLayoutKanban.classList.toggle('active', tasksLayoutMode === 'kanban');

  // If Kanban mode is selected while in Daily Tasks view, render Kanban Board
  if (currentView === 'daily' && tasksLayoutMode === 'kanban') {
    emptyState.classList.add('hidden');
    taskGrid.classList.add('hidden');
    if (kanbanBoard) kanbanBoard.classList.remove('hidden');
    renderKanbanBoard();
    return;
  }

  if (kanbanBoard) kanbanBoard.classList.add('hidden');

  const isCompletedView = currentView === 'completed';
  const filteredTasks = getFilteredAndSortedTasks(isCompletedView);

  if (!isCompletedView) {
    emptyTitle.textContent = activeCategoryFilter === 'all' ? 'No Daily Tasks Yet' : `No #${activeCategoryFilter} Tasks`;
    emptyDesc.innerHTML = 'Click <strong>"New Daily Task"</strong> in the sidebar to add your first task.';
  } else {
    emptyTitle.textContent = 'No Completed Tasks Yet';
    emptyDesc.textContent = 'Tasks you mark as completed will appear here.';
  }

  taskGrid.innerHTML = '';

  if (filteredTasks.length === 0) {
    emptyState.classList.remove('hidden');
    taskGrid.classList.add('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  taskGrid.classList.remove('hidden');

  filteredTasks.forEach(task => {
    const card = document.createElement('div');
    card.className = `task-card ${task.completed ? 'completed' : ''}`;
    card.dataset.id = task.id;

    const isTextGoal = task.goalType === 'text';
    const chipIconSvg = isTextGoal
      ? `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" fill="none">
           <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
           <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
         </svg>`
      : `<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" stroke-width="2.5" fill="none">
           <circle cx="12" cy="12" r="10"></circle>
           <polyline points="12 6 12 12 16 14"></polyline>
         </svg>`;

    const focusTooltip = isTextGoal
      ? 'Start Stopwatch Focus from 00:00:00'
      : `Start Countdown Focus (${escapeHtml(task.duration)})`;

    const priority = task.priority || 'medium';
    const priorityLabel = priority === 'high' ? '🔴 High' : priority === 'low' ? '🟢 Low' : '🟡 Medium';
    const category = task.category || 'Study';

    let recurringText = 'Every Day';
    if (Array.isArray(task.recurringDays) && task.recurringDays.length > 0 && task.recurringDays.length < 7) {
      recurringText = task.recurringDays.map(d => DAY_SHORT_NAMES[d]).join(', ');
    }

    // Subtasks HTML (#4)
    let subtasksHtml = '';
    if (Array.isArray(task.subtasks) && task.subtasks.length > 0) {
      const doneSubCount = task.subtasks.filter(s => s.done).length;
      const pct = Math.round((doneSubCount / task.subtasks.length) * 100);
      const itemsHtml = task.subtasks.map((st, idx) => `
        <div class="card-subtask-item ${st.done ? 'done' : ''}" data-action="toggle-subtask" data-sub-idx="${idx}">
          <span class="subtask-check">${st.done ? '✓' : ''}</span>
          <span>${escapeHtml(st.text)}</span>
        </div>
      `).join('');

      subtasksHtml = `
        <div class="card-subtasks-wrap">
          <div class="subtasks-progress-row">
            <span>Checklist (${doneSubCount}/${task.subtasks.length})</span>
            <span>${pct}%</span>
          </div>
          <div class="subtasks-bar-track">
            <div class="subtasks-bar-fill" style="width:${pct}%;"></div>
          </div>
          ${itemsHtml}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="task-badges-row">
        <span class="priority-badge priority-${priority}">${priorityLabel}</span>
        <span class="category-badge">#${escapeHtml(category)}</span>
        <span class="recurring-badge">🔁 ${recurringText}</span>
      </div>

      <div class="task-card-header">
        <h4 class="task-card-title">${escapeHtml(task.name)}</h4>
        <span class="duration-chip">
          ${chipIconSvg}
          ${escapeHtml(task.duration)}
        </span>
      </div>

      <p class="task-card-desc">${task.desc ? escapeHtml(task.desc) : '<em style="color:#475569">No description provided</em>'}</p>

      ${subtasksHtml}

      <div class="task-card-footer">
        <button class="btn-card-action btn-complete" type="button" data-action="toggle" title="${task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none">
            ${task.completed 
              ? '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>'
              : '<circle cx="12" cy="12" r="9"></circle>'
            }
          </svg>
          <span>${task.completed ? 'Completed' : 'Mark Done'}</span>
        </button>

        ${!task.completed ? `
        <button class="btn-card-action btn-focus" type="button" data-action="focus" title="${focusTooltip}">
          <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2.2" fill="none">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span>Focus</span>
        </button>
        ` : ''}

        <button class="btn-card-action btn-delete" type="button" data-action="delete" title="Delete Task">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;

    taskGrid.appendChild(card);
  });
}

// Feature #17: Kanban Board Rendering & Drag-and-Drop / Status Move
function renderKanbanBoard() {
  if (!kanbanColTodo || !kanbanColProgress || !kanbanColDone) return;

  const allFiltered = getFilteredAndSortedTasks(null);
  const todoTasks = [];
  const progressTasks = [];
  const doneTasks = [];

  allFiltered.forEach(t => {
    if (t.completed || t.status === 'done') {
      doneTasks.push(t);
    } else if (t.status === 'inprogress') {
      progressTasks.push(t);
    } else {
      todoTasks.push(t);
    }
  });

  if (kanbanCountTodo) kanbanCountTodo.textContent = todoTasks.length;
  if (kanbanCountProgress) kanbanCountProgress.textContent = progressTasks.length;
  if (kanbanCountDone) kanbanCountDone.textContent = doneTasks.length;

  kanbanColTodo.innerHTML = '';
  kanbanColProgress.innerHTML = '';
  kanbanColDone.innerHTML = '';

  const buildKanbanCard = (task, colStatus) => {
    const div = document.createElement('div');
    div.className = 'kanban-card';
    div.draggable = true;
    div.dataset.id = task.id;
    const priority = task.priority || 'medium';
    const priorityDot = priority === 'high' ? '🔴' : priority === 'low' ? '🟢' : '🟡';

    div.innerHTML = `
      <div class="task-badges-row" style="margin-bottom:4px;">
        <span class="priority-badge priority-${priority}">${priorityDot} ${priority.toUpperCase()}</span>
        <span class="category-badge">#${escapeHtml(task.category || 'Study')}</span>
        <span class="duration-chip" style="margin-left:auto; font-size:0.7rem; padding:2px 7px;">${escapeHtml(task.duration)}</span>
      </div>
      <div class="kanban-card-title">${escapeHtml(task.name)}</div>
      <div class="kanban-card-footer">
        <div class="kanban-move-btns">
          ${colStatus !== 'todo' ? `<button type="button" class="btn-kanban-move" data-kaction="move-todo" title="Move to To-Do">← To-Do</button>` : ''}
          ${colStatus !== 'inprogress' ? `<button type="button" class="btn-kanban-move" data-kaction="move-progress" title="Move to In Progress">⚡ In Progress</button>` : ''}
          ${colStatus !== 'done' ? `<button type="button" class="btn-kanban-move" data-kaction="move-done" title="Move to Done">✓ Done</button>` : ''}
        </div>
        ${colStatus !== 'done' ? `<button type="button" class="btn-kanban-move" data-kaction="focus" title="Start Focus">▶ Focus</button>` : ''}
      </div>
    `;

    div.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', task.id);
    });

    return div;
  };

  todoTasks.forEach(t => kanbanColTodo.appendChild(buildKanbanCard(t, 'todo')));
  progressTasks.forEach(t => kanbanColProgress.appendChild(buildKanbanCard(t, 'inprogress')));
  doneTasks.forEach(t => kanbanColDone.appendChild(buildKanbanCard(t, 'done')));
}

function updateTaskKanbanStatus(taskId, newStatus) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;
  const wasCompleted = task.completed;
  task.status = newStatus;

  if (newStatus === 'done') {
    task.completed = true;
    task.completedDate = getTodayDateString();
    task.completedAt = new Date().toISOString();
    if (!wasCompleted) {
      playSound('complete');
      const xpReward = task.priority === 'high' ? 75 : task.priority === 'low' ? 35 : 50;
      addXP(xpReward, `Completed "${task.name}"`);
      checkAndIncrementStreak();
    }
  } else {
    task.completed = false;
    delete task.completedDate;
    delete task.completedAt;
    playSound('click');
  }

  saveTasks();
  renderTasks();
}

[kanbanColTodo, kanbanColProgress, kanbanColDone].forEach(col => {
  if (!col) return;
  col.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  col.addEventListener('drop', (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    const targetStatus = col.dataset.status;
    if (taskId && targetStatus) {
      updateTaskKanbanStatus(taskId, targetStatus);
    }
  });
});

if (kanbanBoard) {
  kanbanBoard.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-kaction]');
    if (!btn) return;
    const card = btn.closest('.kanban-card');
    if (!card) return;
    const taskId = card.dataset.id;
    const kaction = btn.dataset.kaction;

    if (kaction === 'move-todo') updateTaskKanbanStatus(taskId, 'todo');
    else if (kaction === 'move-progress') updateTaskKanbanStatus(taskId, 'inprogress');
    else if (kaction === 'move-done') updateTaskKanbanStatus(taskId, 'done');
    else if (kaction === 'focus') {
      const task = tasks.find(t => t.id === taskId);
      if (task) {
        task.status = 'inprogress';
        saveTasks();
        startTaskFocusSession(task);
      }
    }
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// "Başla" Click Transition
startButton.addEventListener('click', () => {
  welcomeScreen.classList.add('fade-out');

  setTimeout(() => {
    welcomeScreen.classList.add('hidden');
    appScreen.classList.remove('hidden');
    updateDate();
    evaluateStreakOnStartup();
    updateXPUI();
    renderBigDay();
    updateWaterUI();
    updateGoalRing();
    restoreBreaksAndTimerUI();
    switchView('daily');

    requestAnimationFrame(() => {
      appScreen.classList.add('active');
    });
  }, 380);
});

// =========================================================
// NEW TASK MODAL: GOAL PICKER, SUBTASKS (#4) & RECURRING DAYS (#11)
// =========================================================
let selectedGoalType = 'time'; // 'time' | 'text'

function setGoalType(type) {
  selectedGoalType = type;
  if (type === 'time') {
    if (btnGoalTypeTime) btnGoalTypeTime.classList.add('active');
    if (btnGoalTypeText) btnGoalTypeText.classList.remove('active');
    if (goalTimePanel) goalTimePanel.classList.remove('hidden');
    if (goalTextPanel) goalTextPanel.classList.add('hidden');
  } else {
    if (btnGoalTypeText) btnGoalTypeText.classList.add('active');
    if (btnGoalTypeTime) btnGoalTypeTime.classList.remove('active');
    if (goalTextPanel) goalTextPanel.classList.remove('hidden');
    if (goalTimePanel) goalTimePanel.classList.add('hidden');
    setTimeout(() => {
      if (taskTextGoalInput) taskTextGoalInput.focus();
    }, 30);
  }
}

if (btnGoalTypeTime) {
  btnGoalTypeTime.addEventListener('click', () => {
    playSound('click');
    setGoalType('time');
  });
}

if (btnGoalTypeText) {
  btnGoalTypeText.addEventListener('click', () => {
    playSound('click');
    setGoalType('text');
  });
}

// Feature #4: Subtask Builder in New Task Modal
function renderModalSubtasks() {
  if (!modalSubtasksList) return;
  modalSubtasksList.innerHTML = '';
  modalSubtasks.forEach((st, idx) => {
    const li = document.createElement('li');
    li.className = 'modal-subtask-pill';
    li.innerHTML = `
      <span>• ${escapeHtml(st.text)}</span>
      <button type="button" data-remove-sub="${idx}" title="Remove step">✕</button>
    `;
    modalSubtasksList.appendChild(li);
  });
}

function addSubtaskFromModalInput() {
  if (!subtaskAddInput) return;
  const val = subtaskAddInput.value.trim();
  if (!val) return;
  modalSubtasks.push({ text: val, done: false });
  subtaskAddInput.value = '';
  playSound('click');
  renderModalSubtasks();
  subtaskAddInput.focus();
}

if (btnAddSubtaskModal) {
  btnAddSubtaskModal.addEventListener('click', addSubtaskFromModalInput);
}

if (subtaskAddInput) {
  subtaskAddInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSubtaskFromModalInput();
    }
  });
}

if (modalSubtasksList) {
  modalSubtasksList.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-remove-sub]');
    if (!btn) return;
    const idx = parseInt(btn.dataset.removeSub, 10);
    modalSubtasks.splice(idx, 1);
    renderModalSubtasks();
  });
}

// Feature #11: Recurring Days Pills in New Task Modal
if (recurringDaysRow) {
  recurringDaysRow.addEventListener('click', (e) => {
    const pill = e.target.closest('.btn-day-pill');
    if (!pill) return;
    playSound('click');
    pill.classList.toggle('active');
  });
}

function syncModalTimeChips() {
  if (!taskHoursInput || !taskMinutesInput) return;
  const h = parseInt(taskHoursInput.value || '0', 10);
  const m = parseInt(taskMinutesInput.value || '0', 10);
  document.querySelectorAll('.btn-time-chip').forEach(chip => {
    const ch = parseInt(chip.dataset.h, 10);
    const cm = parseInt(chip.dataset.m, 10);
    chip.classList.toggle('active', ch === h && cm === m);
  });
}

document.querySelectorAll('.btn-step').forEach(btn => {
  btn.addEventListener('click', () => {
    playSound('click');
    const stepType = btn.dataset.step;
    let h = parseInt(taskHoursInput.value || '0', 10) || 0;
    let m = parseInt(taskMinutesInput.value || '0', 10) || 0;

    if (stepType === 'h-inc') h = Math.min(23, h + 1);
    if (stepType === 'h-dec') h = Math.max(0, h - 1);
    if (stepType === 'm-inc') {
      m += 5;
      if (m >= 60) {
        m = m % 60;
        h = Math.min(23, h + 1);
      }
    }
    if (stepType === 'm-dec') {
      m -= 5;
      if (m < 0) {
        if (h > 0) {
          h -= 1;
          m = 55;
        } else {
          m = 0;
        }
      }
    }

    taskHoursInput.value = h;
    taskMinutesInput.value = m;
    syncModalTimeChips();
  });
});

if (taskHoursInput) taskHoursInput.addEventListener('input', syncModalTimeChips);
if (taskMinutesInput) taskMinutesInput.addEventListener('input', syncModalTimeChips);

document.querySelectorAll('.btn-time-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    playSound('click');
    taskHoursInput.value = chip.dataset.h;
    taskMinutesInput.value = chip.dataset.m;
    syncModalTimeChips();
  });
});

document.querySelectorAll('.btn-text-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    playSound('click');
    if (taskTextGoalInput) {
      taskTextGoalInput.value = chip.dataset.text;
    }
    document.querySelectorAll('.btn-text-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

if (taskTextGoalInput) {
  taskTextGoalInput.addEventListener('input', () => {
    document.querySelectorAll('.btn-text-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.text === taskTextGoalInput.value.trim());
    });
  });
}

function openModal() {
  taskModal.classList.remove('hidden');
  taskForm.reset();
  modalSubtasks = [];
  renderModalSubtasks();
  document.querySelectorAll('#recurringDaysRow .btn-day-pill').forEach(p => p.classList.add('active'));
  if (taskPrioritySelect) taskPrioritySelect.value = 'medium';
  if (taskCategorySelect) taskCategorySelect.value = 'Study';
  setGoalType('time');
  if (taskHoursInput) taskHoursInput.value = '0';
  if (taskMinutesInput) taskMinutesInput.value = '30';
  if (taskTextGoalInput) taskTextGoalInput.value = '';
  syncModalTimeChips();
  document.querySelectorAll('.btn-text-chip').forEach(c => c.classList.remove('active'));
  setTimeout(() => taskNameInput.focus(), 50);
}

function closeModal() {
  taskModal.classList.add('hidden');
}

btnNewDailyTask.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
modalCancelBtn.addEventListener('click', closeModal);

// Add Task Form Submit
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = taskNameInput.value.trim();
  const desc = taskDescInput.value.trim();
  const priority = taskPrioritySelect ? taskPrioritySelect.value : 'medium';
  const category = taskCategorySelect ? taskCategorySelect.value : 'Study';

  if (!name) return;

  let duration = '';
  let hours = 0;
  let minutes = 0;
  let totalMinutes = 0;

  if (selectedGoalType === 'time') {
    hours = Math.max(0, Math.min(23, parseInt(taskHoursInput.value || '0', 10) || 0));
    minutes = Math.max(0, Math.min(59, parseInt(taskMinutesInput.value || '0', 10) || 0));
    totalMinutes = (hours * 60) + minutes;

    if (totalMinutes <= 0) {
      showToast('Invalid Duration', 'Please select at least 1 minute or switch to Text Goal.', '⚠️');
      return;
    }

    if (hours > 0 && minutes > 0) {
      duration = `${hours}h ${minutes}m`;
    } else if (hours > 0) {
      duration = `${hours}h`;
    } else {
      duration = `${minutes}m`;
    }
  } else {
    const textGoal = taskTextGoalInput ? taskTextGoalInput.value.trim() : '';
    if (!textGoal) {
      if (taskTextGoalInput) taskTextGoalInput.focus();
      return;
    }
    duration = textGoal;
  }

  // Gather active recurring days (#11)
  const recurringDays = [];
  document.querySelectorAll('#recurringDaysRow .btn-day-pill.active').forEach(pill => {
    recurringDays.push(parseInt(pill.dataset.day, 10));
  });

  // Also include any typed but un-clicked subtask text
  if (subtaskAddInput && subtaskAddInput.value.trim()) {
    modalSubtasks.push({ text: subtaskAddInput.value.trim(), done: false });
  }

  const newTask = {
    id: Date.now().toString(),
    name,
    desc,
    priority,
    category,
    subtasks: modalSubtasks.slice(),
    recurringDays: recurringDays.length > 0 ? recurringDays : [0, 1, 2, 3, 4, 5, 6],
    status: 'todo',
    goalType: selectedGoalType,
    hours,
    minutes,
    totalMinutes,
    duration,
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.unshift(newTask);
  saveTasks();
  closeModal();
  playSound('click');
  showToast('Task Created', `"${name}" added to #${category}`, '📌');

  switchView('daily');
});

// Task Card Actions (Complete, Focus, Delete, Subtask Toggle)
taskGrid.addEventListener('click', (e) => {
  // Check if user clicked a subtask item (#4)
  const subItem = e.target.closest('[data-action="toggle-subtask"]');
  if (subItem) {
    const card = subItem.closest('.task-card');
    const taskId = card.dataset.id;
    const subIdx = parseInt(subItem.dataset.subIdx, 10);
    const task = tasks.find(t => t.id === taskId);
    if (task && Array.isArray(task.subtasks) && task.subtasks[subIdx]) {
      task.subtasks[subIdx].done = !task.subtasks[subIdx].done;
      if (task.subtasks[subIdx].done) {
        playSound('click');
        addXP(10, `Completed step: "${task.subtasks[subIdx].text}"`);
      }
      saveTasks();
      renderTasks();
    }
    return;
  }

  const actionBtn = e.target.closest('button[data-action]');
  if (!actionBtn) return;

  const card = actionBtn.closest('.task-card');
  const taskId = card.dataset.id;
  const action = actionBtn.dataset.action;

  if (action === 'toggle') {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      if (task.completed) {
        task.status = 'done';
        task.completedDate = getTodayDateString();
        task.completedAt = new Date().toISOString();
        playSound('complete');
        const xpReward = task.priority === 'high' ? 75 : task.priority === 'low' ? 35 : 50;
        addXP(xpReward, `Completed "${task.name}"`);
        checkAndIncrementStreak();
      } else {
        task.status = 'todo';
        delete task.completedDate;
        delete task.completedAt;
        playSound('click');
      }
      saveTasks();
      renderTasks();
    }
  } else if (action === 'focus') {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.status = 'inprogress';
      saveTasks();
      startTaskFocusSession(task);
    }
  } else if (action === 'delete') {
    tasks = tasks.filter(t => t.id !== taskId);
    playSound('click');
    saveTasks();
    renderTasks();
  }
});

// =========================================================
// LIVE CLOCK & CALENDAR PLAN NUDGE CHECKER
// =========================================================
let notifiedPlanIdsToday = new Set();

function updateLiveClock() {
  const now = new Date();
  const hh24 = String(now.getHours()).padStart(2, '0');
  const mm24 = String(now.getMinutes()).padStart(2, '0');
  const ss24 = String(now.getSeconds()).padStart(2, '0');

  if (appSettings.clock24h) {
    liveDigitalClock.textContent = `${hh24}:${mm24}:${ss24}`;
  } else {
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const h = String(hours).padStart(2, '0');
    liveDigitalClock.innerHTML = `${h}:${mm24}:${ss24} <span style="font-size:1.6rem; opacity:0.75; font-weight:600;">${ampm}</span>`;
  }

  liveClockDate.textContent = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Feature #6: Check if any scheduled Calendar Plan matches current HH:MM
  if (ss24 === '00') {
    const todayStr = getTodayDateString();
    const todaysPlans = calendarPlans[todayStr] || [];
    const curHM = `${hh24}:${mm24}`;
    todaysPlans.forEach(plan => {
      if (!plan.completed && plan.time && plan.time.includes(curHM) && !notifiedPlanIdsToday.has(plan.id)) {
        notifiedPlanIdsToday.add(plan.id);
        playSound('complete');
        notifyUser(`📅 Scheduled Agenda Plan (${plan.time})`, plan.title, '📅', true);
      }
    });
  }
}
setInterval(updateLiveClock, 1000);

// =========================================================
// TIMER (STOPWATCH, COUNTDOWN TIMER & POMODORO) & BREAK LOGIC
// =========================================================
let timerMode = 'stopwatch'; // 'stopwatch' | 'countdown' | 'pomodoro'
let swInterval = null;
let swStartTime = 0;
let swElapsedTime = parseInt(localStorage.getItem('today_sw_elapsed') || '0', 10);
let swRunning = false;

// Countdown Timer (Sayaç) state
let cdHours = 0;
let cdMinutes = 30;
let cdTotalSeconds = 30 * 60;
let cdRemainingSeconds = 30 * 60;
let cdRunning = false;
let cdInterval = null;

// Pomodoro Focus state
let pomoMinutes = 25;
let pomoSecondsRemaining = 25 * 60;
let pomoRunning = false;
let pomoInterval = null;
let activeFocusTask = null;
let activeFocusCategory = 'Study';

// Break state (Auto-persisted in localStorage)
let inBreak = false;
let breakStartTime = 0;
let breakRecords = JSON.parse(localStorage.getItem('today_break_records') || '[]');
let totalBreakMs = parseInt(localStorage.getItem('today_total_break_ms') || '0', 10);

function formatStopwatchTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((ms % 1000) / 10);

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  const msStr = String(milliseconds).padStart(2, '0');

  return { main: `${hh}:${mm}:${ss}`, ms: `.${msStr}`, full: `${hh}:${mm}:${ss}.${msStr}` };
}

function formatCountdownTime(totalSec) {
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  const hh = String(h).padStart(2, '0');
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
}

function formatPomodoroTime(totalSec) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(s).padStart(2, '0');
  return `${mm}:${ss}`;
}

function updateTimerDisplay() {
  if (timerMode === 'stopwatch') {
    const t = formatStopwatchTime(swElapsedTime);
    stopwatchDisplay.innerHTML = `${t.main}<span class="ms-display">${t.ms}</span>`;
    if (miniTimerDisplay) miniTimerDisplay.textContent = t.main;
  } else if (timerMode === 'countdown') {
    const formatted = formatCountdownTime(cdRemainingSeconds);
    stopwatchDisplay.innerHTML = `${formatted}<span class="ms-display">.00</span>`;
    if (miniTimerDisplay) miniTimerDisplay.textContent = formatted;
  } else {
    const formatted = formatPomodoroTime(pomoSecondsRemaining);
    stopwatchDisplay.innerHTML = `${formatted}<span class="ms-display">.00</span>`;
    if (miniTimerDisplay) miniTimerDisplay.textContent = formatted;
  }
}

function restoreBreaksAndTimerUI() {
  if (swElapsedTime > 0) {
    updateTimerDisplay();
    btnSwReset.disabled = false;
  }

  if (breakRecords && breakRecords.length > 0) {
    const hint = document.getElementById('noBreaksHint');
    if (hint) hint.remove();
    breaksList.innerHTML = '';

    breakRecords.forEach(rec => {
      const li = document.createElement('li');
      li.className = 'break-item';
      li.innerHTML = `
        <span class="break-num">#${rec.breakNumber}</span>
        <span class="break-duration">${rec.durationFormatted}</span>
        <span>${rec.startedAt}</span>
      `;
      breaksList.prepend(li);
    });

    totalBreakTime.textContent = formatStopwatchTime(totalBreakMs).main;
    breaksSummary.classList.remove('hidden');
    btnSwReset.disabled = false;
  }
}

function setTimerMode(mode) {
  if (timerMode === mode) return;
  if (strictFocusMode && isAnyTimerRunning()) {
    showToast('🔒 Strict Focus Lock Active', 'Pause the timer before switching timer modes.', '🔒');
    return;
  }
  timerMode = mode;

  if (swRunning) {
    clearInterval(swInterval);
    swRunning = false;
    localStorage.setItem('today_sw_elapsed', swElapsedTime.toString());
  }
  if (cdRunning) {
    clearInterval(cdInterval);
    cdRunning = false;
  }
  if (pomoRunning) {
    clearInterval(pomoInterval);
    pomoRunning = false;
  }

  btnSwStart.textContent = 'Start';
  btnSwStart.classList.remove('running');
  btnSwBreak.disabled = true;
  if (miniBtnPlayPause) miniBtnPlayPause.textContent = '▶';

  if (btnModeStopwatch) btnModeStopwatch.classList.toggle('active', mode === 'stopwatch');
  if (btnModeCountdown) btnModeCountdown.classList.toggle('active', mode === 'countdown');
  if (btnModePomodoro) btnModePomodoro.classList.toggle('active', mode === 'pomodoro');

  if (countdownSetup) countdownSetup.classList.toggle('hidden', mode !== 'countdown');
  if (pomoPresets) pomoPresets.classList.toggle('hidden', mode !== 'pomodoro');

  if (miniTaskTitle) {
    if (activeFocusTask) {
      miniTaskTitle.textContent = activeFocusTask;
    } else if (mode === 'stopwatch') {
      miniTaskTitle.textContent = 'Stopwatch Focus';
    } else if (mode === 'countdown') {
      miniTaskTitle.textContent = 'Countdown Timer';
    } else {
      miniTaskTitle.textContent = 'Pomodoro Focus';
    }
  }

  updateTimerDisplay();
}

if (btnModeStopwatch) {
  btnModeStopwatch.addEventListener('click', () => {
    playSound('click');
    setTimerMode('stopwatch');
  });
}

if (btnModeCountdown) {
  btnModeCountdown.addEventListener('click', () => {
    playSound('click');
    setTimerMode('countdown');
  });
}

if (btnModePomodoro) {
  btnModePomodoro.addEventListener('click', () => {
    playSound('click');
    setTimerMode('pomodoro');
  });
}

// Countdown Timer Setup Controls
function applyCountdownInputsToState() {
  if (!cdHoursInput || !cdMinutesInput) return;
  let h = Math.max(0, Math.min(23, parseInt(cdHoursInput.value || '0', 10) || 0));
  let m = Math.max(0, Math.min(59, parseInt(cdMinutesInput.value || '0', 10) || 0));
  if (h === 0 && m === 0) m = 1;
  cdHours = h;
  cdMinutes = m;
  cdHoursInput.value = h;
  cdMinutesInput.value = m;
  cdTotalSeconds = (h * 3600) + (m * 60);

  if (!cdRunning) {
    cdRemainingSeconds = cdTotalSeconds;
    updateTimerDisplay();
  }

  document.querySelectorAll('.btn-cd-chip').forEach(chip => {
    const ch = parseInt(chip.dataset.h, 10);
    const cm = parseInt(chip.dataset.m, 10);
    chip.classList.toggle('active', ch === h && cm === m);
  });
}

document.querySelectorAll('.btn-cd-step').forEach(btn => {
  btn.addEventListener('click', () => {
    playSound('click');
    if (cdRunning) return;
    const act = btn.dataset.cdAction;
    let h = parseInt(cdHoursInput.value || '0', 10) || 0;
    let m = parseInt(cdMinutesInput.value || '0', 10) || 0;

    if (act === 'h-inc') h = Math.min(23, h + 1);
    if (act === 'h-dec') h = Math.max(0, h - 1);
    if (act === 'm-inc') {
      m += 5;
      if (m >= 60) {
        m = m % 60;
        h = Math.min(23, h + 1);
      }
    }
    if (act === 'm-dec') {
      m -= 5;
      if (m < 0) {
        if (h > 0) {
          h -= 1;
          m = 55;
        } else {
          m = 1;
        }
      }
    }
    cdHoursInput.value = h;
    cdMinutesInput.value = m;
    applyCountdownInputsToState();
  });
});

if (cdHoursInput) cdHoursInput.addEventListener('change', applyCountdownInputsToState);
if (cdMinutesInput) cdMinutesInput.addEventListener('change', applyCountdownInputsToState);

document.querySelectorAll('.btn-cd-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    playSound('click');
    if (cdRunning) {
      clearInterval(cdInterval);
      cdRunning = false;
      btnSwStart.textContent = 'Start';
      btnSwStart.classList.remove('running');
      btnSwBreak.disabled = true;
      if (miniBtnPlayPause) miniBtnPlayPause.textContent = '▶';
    }
    cdHoursInput.value = chip.dataset.h;
    cdMinutesInput.value = chip.dataset.m;
    applyCountdownInputsToState();
  });
});

// Pomodoro Preset Click Handler (25m, 45m, 60m)
document.querySelectorAll('.btn-pomo-preset').forEach(btn => {
  btn.addEventListener('click', () => {
    playSound('click');
    document.querySelectorAll('.btn-pomo-preset').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const mins = parseInt(btn.dataset.mins, 10);
    pomoMinutes = mins;

    if (!pomoRunning) {
      pomoSecondsRemaining = pomoMinutes * 60;
      updateTimerDisplay();
    }
  });
});

// Start Focus Session Directly from Task Card
function startTaskFocusSession(task) {
  activeFocusTask = task.name;
  activeFocusCategory = task.category || 'Study';
  if (activeFocusTaskName) {
    activeFocusTaskName.textContent = `${task.name} (${task.duration}) • #${activeFocusCategory}`;
  }
  if (activeFocusBanner) activeFocusBanner.classList.remove('hidden');
  if (miniTaskTitle) miniTaskTitle.textContent = task.name;

  // Temporarily allow view switch into 'time'
  switchView('time');

  if (task.goalType === 'text') {
    setTimerMode('stopwatch');

    if (swRunning) {
      clearInterval(swInterval);
      swRunning = false;
    }

    if (swElapsedTime >= 60000) {
      focusHistory.push({
        date: getTodayDateString(),
        minutes: Math.floor(swElapsedTime / 60000),
        task: 'Previous Stopwatch Session',
        category: activeFocusCategory,
        rating: 5,
        note: '',
        timestamp: Date.now()
      });
      localStorage.setItem('app_focus_history', JSON.stringify(focusHistory));
    }

    swElapsedTime = 0;
    localStorage.setItem('today_sw_elapsed', '0');
    updateTimerDisplay();
    btnSwStart.click();
  } else {
    setTimerMode('countdown');

    if (cdRunning) {
      clearInterval(cdInterval);
      cdRunning = false;
    }

    let h = 0;
    let m = 0;
    if (typeof task.hours === 'number' && typeof task.minutes === 'number' && (task.hours > 0 || task.minutes > 0)) {
      h = task.hours;
      m = task.minutes;
    } else {
      const parsedMins = parseMinutesFromDurationStr(task.duration, task);
      h = Math.floor(parsedMins / 60);
      m = parsedMins % 60;
    }

    if (h === 0 && m === 0) m = 25;

    if (cdHoursInput) cdHoursInput.value = h;
    if (cdMinutesInput) cdMinutesInput.value = m;
    cdHours = h;
    cdMinutes = m;
    cdTotalSeconds = (h * 3600) + (m * 60);
    cdRemainingSeconds = cdTotalSeconds;

    document.querySelectorAll('.btn-cd-chip').forEach(chip => {
      const ch = parseInt(chip.dataset.h, 10);
      const cm = parseInt(chip.dataset.m, 10);
      chip.classList.toggle('active', ch === h && cm === m);
    });

    updateTimerDisplay();
    btnSwStart.click();
  }
}

// =========================================================
// FEATURE #13: POST-SESSION REFLECTION & STAR RATING MODAL
// =========================================================
function openReflectionModal(sessionIndex, minutesCompleted, taskLabel) {
  lastCompletedSessionIndex = sessionIndex;
  currentReflectionRating = 5;
  if (reflectionModalTitle) {
    reflectionModalTitle.textContent = `Focus Complete! (${minutesCompleted}m) 🎉`;
  }
  if (reflectionSubtitle) {
    reflectionSubtitle.textContent = `Completed ${minutesCompleted} minutes on "${taskLabel}". Rate your focus quality:`;
  }
  if (reflectionNoteInput) reflectionNoteInput.value = '';
  document.querySelectorAll('#starRatingRow .btn-star').forEach(btn => btn.classList.add('active'));
  if (reflectionModal) reflectionModal.classList.remove('hidden');
}

if (starRatingRow) {
  starRatingRow.addEventListener('click', (e) => {
    const starBtn = e.target.closest('.btn-star');
    if (!starBtn) return;
    playSound('click');
    const val = parseInt(starBtn.dataset.star, 10);
    currentReflectionRating = val;
    document.querySelectorAll('#starRatingRow .btn-star').forEach(btn => {
      const bVal = parseInt(btn.dataset.star, 10);
      btn.classList.toggle('active', bVal <= val);
    });
  });
}

if (btnSaveReflection) {
  btnSaveReflection.addEventListener('click', () => {
    playSound('complete');
    if (lastCompletedSessionIndex >= 0 && focusHistory[lastCompletedSessionIndex]) {
      focusHistory[lastCompletedSessionIndex].rating = currentReflectionRating;
      focusHistory[lastCompletedSessionIndex].note = reflectionNoteInput ? reflectionNoteInput.value.trim() : '';
      localStorage.setItem('app_focus_history', JSON.stringify(focusHistory));
    }
    if (reflectionModal) reflectionModal.classList.add('hidden');
    showToast('Session Reflection Saved', `Rated ${'⭐'.repeat(currentReflectionRating)}`, '📝');
    if (currentView === 'analytics') {
      renderAnalytics(currentAnalyticsTimeframe);
    }
  });
}

// Start / Pause Handler
btnSwStart.addEventListener('click', () => {
  playSound('click');

  if (timerMode === 'stopwatch') {
    if (!swRunning) {
      swRunning = true;
      swStartTime = Date.now() - swElapsedTime;
      btnSwStart.textContent = 'Pause';
      btnSwStart.classList.add('running');
      btnSwBreak.disabled = false;
      btnSwReset.disabled = false;
      if (miniBtnPlayPause) miniBtnPlayPause.textContent = '⏸';

      swInterval = setInterval(() => {
        if (inBreak) {
          swStartTime = Date.now() - swElapsedTime;
          return;
        }
        swElapsedTime = Date.now() - swStartTime;
        updateTimerDisplay();
        if (Math.floor(swElapsedTime / 1000) % 5 === 0) {
          localStorage.setItem('today_sw_elapsed', swElapsedTime.toString());
          updateGoalRing();
        }
      }, 10);
    } else {
      swRunning = false;
      clearInterval(swInterval);
      btnSwStart.textContent = 'Resume';
      btnSwStart.classList.remove('running');
      btnSwBreak.disabled = true;
      if (miniBtnPlayPause) miniBtnPlayPause.textContent = '▶';
      localStorage.setItem('today_sw_elapsed', swElapsedTime.toString());
      updateGoalRing();
    }
  } else if (timerMode === 'countdown') {
    if (!cdRunning) {
      cdRunning = true;
      btnSwStart.textContent = 'Pause';
      btnSwStart.classList.add('running');
      btnSwBreak.disabled = false;
      btnSwReset.disabled = false;
      if (miniBtnPlayPause) miniBtnPlayPause.textContent = '⏸';

      cdInterval = setInterval(() => {
        if (inBreak) return;

        if (cdRemainingSeconds > 0) {
          cdRemainingSeconds--;
          updateTimerDisplay();
        } else {
          clearInterval(cdInterval);
          cdRunning = false;
          btnSwStart.textContent = 'Start';
          btnSwStart.classList.remove('running');
          btnSwBreak.disabled = true;
          if (miniBtnPlayPause) miniBtnPlayPause.textContent = '▶';

          playSound('complete');

          const completedMins = Math.max(1, Math.round(cdTotalSeconds / 60));
          const sessionTitle = activeFocusTask || 'Countdown Timer';
          focusHistory.push({
            date: getTodayDateString(),
            minutes: completedMins,
            task: sessionTitle,
            category: activeFocusCategory || 'Study',
            rating: 5,
            note: '',
            timestamp: Date.now()
          });
          localStorage.setItem('app_focus_history', JSON.stringify(focusHistory));

          addXP(completedMins * 2, `Completed ${completedMins}m Countdown Timer`);
          checkAndIncrementStreak();
          updateGoalRing();

          notifyUser(
            '🎉 Countdown Timer Finished!',
            `You completed ${completedMins} minutes of focus on "${sessionTitle}".`,
            '🎉',
            true
          );

          openReflectionModal(focusHistory.length - 1, completedMins, sessionTitle);

          cdRemainingSeconds = cdTotalSeconds;
          updateTimerDisplay();
        }
      }, 1000);
    } else {
      cdRunning = false;
      clearInterval(cdInterval);
      btnSwStart.textContent = 'Resume';
      btnSwStart.classList.remove('running');
      btnSwBreak.disabled = true;
      if (miniBtnPlayPause) miniBtnPlayPause.textContent = '▶';
    }
  } else {
    // Pomodoro Mode
    if (!pomoRunning) {
      pomoRunning = true;
      btnSwStart.textContent = 'Pause';
      btnSwStart.classList.add('running');
      btnSwBreak.disabled = false;
      btnSwReset.disabled = false;
      if (miniBtnPlayPause) miniBtnPlayPause.textContent = '⏸';

      pomoInterval = setInterval(() => {
        if (inBreak) return;

        if (pomoSecondsRemaining > 0) {
          pomoSecondsRemaining--;
          updateTimerDisplay();
        } else {
          clearInterval(pomoInterval);
          pomoRunning = false;
          btnSwStart.textContent = 'Start';
          btnSwStart.classList.remove('running');
          btnSwBreak.disabled = true;
          if (miniBtnPlayPause) miniBtnPlayPause.textContent = '▶';

          playSound('complete');

          const sessionTitle = activeFocusTask || 'Pomodoro Focus';
          focusHistory.push({
            date: getTodayDateString(),
            minutes: pomoMinutes,
            task: sessionTitle,
            category: activeFocusCategory || 'Study',
            rating: 5,
            note: '',
            timestamp: Date.now()
          });
          localStorage.setItem('app_focus_history', JSON.stringify(focusHistory));

          addXP(pomoMinutes * 2, `Completed ${pomoMinutes}m Pomodoro Session`);
          checkAndIncrementStreak();
          updateGoalRing();

          notifyUser(
            '🎉 Pomodoro Session Complete!',
            `Outstanding ${pomoMinutes}-minute focus session completed on "${sessionTitle}".`,
            '🍅',
            true
          );

          openReflectionModal(focusHistory.length - 1, pomoMinutes, sessionTitle);

          pomoSecondsRemaining = pomoMinutes * 60;
          updateTimerDisplay();
        }
      }, 1000);
    } else {
      pomoRunning = false;
      clearInterval(pomoInterval);
      btnSwStart.textContent = 'Resume';
      btnSwStart.classList.remove('running');
      btnSwBreak.disabled = true;
      if (miniBtnPlayPause) miniBtnPlayPause.textContent = '▶';
    }
  }
});

// Break (Mola) Handler
btnSwBreak.addEventListener('click', () => {
  const isTimerActive = isAnyTimerRunning();
  if (!isTimerActive) return;

  playSound('break');

  if (!inBreak) {
    inBreak = true;
    breakStartTime = Date.now();
    btnSwBreak.classList.add('in-break');
    breakBtnText.textContent = 'End Break';
    if (miniBtnBreak) miniBtnBreak.classList.add('in-break');
    showToast('Break Started ☕', 'Timer paused while recording break duration.', '☕');
  } else {
    inBreak = false;
    const breakEndTime = Date.now();
    const breakDurationMs = breakEndTime - breakStartTime;
    totalBreakMs += breakDurationMs;

    btnSwBreak.classList.remove('in-break');
    breakBtnText.textContent = 'Break';
    if (miniBtnBreak) miniBtnBreak.classList.remove('in-break');

    const breakNumber = breakRecords.length + 1;
    const durationFormatted = formatStopwatchTime(breakDurationMs).main;
    const startedAt = new Date(breakStartTime).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    breakRecords.push({ breakNumber, durationFormatted, durationMs: breakDurationMs, startedAt });

    localStorage.setItem('today_break_records', JSON.stringify(breakRecords));
    localStorage.setItem('today_total_break_ms', totalBreakMs.toString());

    const hint = document.getElementById('noBreaksHint');
    if (hint) hint.remove();

    const li = document.createElement('li');
    li.className = 'break-item';
    li.innerHTML = `
      <span class="break-num">#${breakNumber}</span>
      <span class="break-duration">${durationFormatted}</span>
      <span>${startedAt}</span>
    `;

    breaksList.prepend(li);

    totalBreakTime.textContent = formatStopwatchTime(totalBreakMs).main;
    breaksSummary.classList.remove('hidden');
    showToast('Break Ended ⚡', `Break #${breakNumber} logged (${durationFormatted}). Back to focus!`, '⚡');
  }
});

// Reset Handler
btnSwReset.addEventListener('click', () => {
  if (strictFocusMode && isAnyTimerRunning()) {
    playSound('break');
    showToast('🔒 Strict Focus Lock Active', 'Pause the timer or disable Strict Lock before resetting.', '🔒');
    return;
  }

  playSound('click');

  if (timerMode === 'stopwatch') {
    swRunning = false;
    clearInterval(swInterval);
    swElapsedTime = 0;
  } else if (timerMode === 'countdown') {
    cdRunning = false;
    clearInterval(cdInterval);
    cdRemainingSeconds = cdTotalSeconds;
  } else {
    pomoRunning = false;
    clearInterval(pomoInterval);
    pomoSecondsRemaining = pomoMinutes * 60;
  }

  inBreak = false;
  breakStartTime = 0;
  breakRecords = [];
  totalBreakMs = 0;

  localStorage.removeItem('today_sw_elapsed');
  localStorage.removeItem('today_break_records');
  localStorage.removeItem('today_total_break_ms');

  btnSwBreak.classList.remove('in-break');
  breakBtnText.textContent = 'Break';
  btnSwBreak.disabled = true;
  btnSwReset.disabled = true;
  btnSwStart.textContent = 'Start';
  btnSwStart.classList.remove('running');
  if (miniBtnPlayPause) miniBtnPlayPause.textContent = '▶';
  if (miniBtnBreak) miniBtnBreak.classList.remove('in-break');

  breaksList.innerHTML = '<li class="no-breaks-hint" id="noBreaksHint">No breaks recorded yet.</li>';
  breaksSummary.classList.add('hidden');

  updateTimerDisplay();
  updateGoalRing();
});

// Auto-save all session progress on app exit/unload
window.addEventListener('beforeunload', () => {
  if (swElapsedTime > 0) {
    localStorage.setItem('today_sw_elapsed', swElapsedTime.toString());
  }
  localStorage.setItem('today_break_records', JSON.stringify(breakRecords));
  localStorage.setItem('today_total_break_ms', totalBreakMs.toString());
  localStorage.setItem('app_streak_count', streakCountValue.toString());
  localStorage.setItem('last_streak_date', lastStreakDate);
  localStorage.setItem('app_focus_history', JSON.stringify(focusHistory));
  localStorage.setItem('zenith_user_xp', userXP.toString());
  saveTasks();
  saveSettings();
});

// =========================================================
// ALWAYS-ON-TOP MINI DESKTOP WIDGET & FEATURE #10 GLOBAL HOTKEYS
// =========================================================
function setMiniModeUI(isMini) {
  document.body.classList.toggle('in-mini-mode', isMini);
  if (miniWidgetBar) {
    miniWidgetBar.classList.toggle('hidden', !isMini);
  }
}

if (btnMiniMode) {
  btnMiniMode.addEventListener('click', () => {
    playSound('click');
    if (window.electronAPI && window.electronAPI.toggleMiniMode) {
      window.electronAPI.toggleMiniMode();
    } else {
      const willBeMini = !document.body.classList.contains('in-mini-mode');
      setMiniModeUI(willBeMini);
    }
  });
}

if (miniBtnExpand) {
  miniBtnExpand.addEventListener('click', () => {
    playSound('click');
    if (window.electronAPI && window.electronAPI.toggleMiniMode) {
      window.electronAPI.toggleMiniMode();
    } else {
      setMiniModeUI(false);
    }
  });
}

if (miniBtnPlayPause) {
  miniBtnPlayPause.addEventListener('click', () => btnSwStart.click());
}

if (miniBtnBreak) {
  miniBtnBreak.addEventListener('click', () => btnSwBreak.click());
}

if (window.electronAPI && window.electronAPI.onMiniModeChanged) {
  window.electronAPI.onMiniModeChanged((isMini) => {
    setMiniModeUI(isMini);
  });
}

// Feature #10: Listen to Global Keyboard Shortcuts from Electron Main Process
if (window.electronAPI && window.electronAPI.onGlobalHotkey) {
  window.electronAPI.onGlobalHotkey((action) => {
    if (action === 'toggle-timer') {
      btnSwStart.click();
    } else if (action === 'toggle-break') {
      if (!btnSwBreak.disabled) {
        btnSwBreak.click();
      }
    }
  });
}

// =========================================================
// FEATURE #7: QUICK SCRATCHPAD & PINNED STICKY NOTES
// =========================================================
function updateScratchpadWordCount() {
  if (!scratchpadTextarea || !scratchpadWordCount) return;
  const text = scratchpadTextarea.value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  scratchpadWordCount.textContent = `${words} word${words === 1 ? '' : 's'}`;
}

if (scratchpadTextarea) {
  scratchpadTextarea.value = localStorage.getItem('zenith_scratchpad_text') || '';
  updateScratchpadWordCount();

  scratchpadTextarea.addEventListener('input', () => {
    localStorage.setItem('zenith_scratchpad_text', scratchpadTextarea.value);
    updateScratchpadWordCount();
  });
}

if (btnCopyScratchpad) {
  btnCopyScratchpad.addEventListener('click', () => {
    if (!scratchpadTextarea) return;
    navigator.clipboard.writeText(scratchpadTextarea.value || '');
    playSound('click');
    showToast('Copied to Clipboard', 'Scratchpad notes copied!', '📋');
  });
}

if (btnClearScratchpad) {
  btnClearScratchpad.addEventListener('click', () => {
    if (!scratchpadTextarea || !scratchpadTextarea.value) return;
    if (confirm('Clear all text in the Quick Scratchpad?')) {
      scratchpadTextarea.value = '';
      localStorage.setItem('zenith_scratchpad_text', '');
      updateScratchpadWordCount();
      playSound('click');
    }
  });
}

function saveStickyNotes() {
  localStorage.setItem('zenith_sticky_notes', JSON.stringify(stickyNotes));
  updateBadges();
}

function renderStickyNotes() {
  if (!stickyNotesGrid) return;
  stickyNotesGrid.innerHTML = '';
  updateBadges();

  if (stickyNotes.length === 0) {
    stickyNotesGrid.innerHTML = `<div style="grid-column:1/-1; text-align:center; color:#64748b; padding:32px 12px; font-size:0.86rem;">No pinned sticky notes yet. Click <strong>"+ New Note"</strong> to pin formulas, reminders, or key goals.</div>`;
    return;
  }

  stickyNotes.forEach(note => {
    const card = document.createElement('div');
    card.className = 'sticky-note-item';
    card.innerHTML = `
      <textarea data-note-id="${note.id}" placeholder="Type pinned note...">${escapeHtml(note.content)}</textarea>
      <div class="sticky-note-footer">
        <span class="sticky-note-date">${escapeHtml(note.date || '')}</span>
        <button type="button" class="btn-sticky-del" data-del-note="${note.id}" title="Delete Note">Delete</button>
      </div>
    `;
    stickyNotesGrid.appendChild(card);
  });
}

if (btnAddStickyNote) {
  btnAddStickyNote.addEventListener('click', () => {
    playSound('click');
    stickyNotes.unshift({
      id: Date.now().toString(),
      content: '',
      date: getTodayDateString()
    });
    saveStickyNotes();
    renderStickyNotes();
    const firstTa = stickyNotesGrid.querySelector('textarea');
    if (firstTa) firstTa.focus();
  });
}

if (stickyNotesGrid) {
  stickyNotesGrid.addEventListener('input', (e) => {
    const ta = e.target.closest('textarea[data-note-id]');
    if (!ta) return;
    const note = stickyNotes.find(n => n.id === ta.dataset.noteId);
    if (note) {
      note.content = ta.value;
      saveStickyNotes();
    }
  });

  stickyNotesGrid.addEventListener('click', (e) => {
    const delBtn = e.target.closest('button[data-del-note]');
    if (!delBtn) return;
    playSound('click');
    stickyNotes = stickyNotes.filter(n => n.id !== delBtn.dataset.delNote);
    saveStickyNotes();
    renderStickyNotes();
  });
}

// =========================================================
// ANALYTICS (WEEKLY, MONTHLY, YEARLY + #5 HEATMAP + #12 DIST + #13 LOGS + #20 PNG)
// =========================================================
document.querySelectorAll('.btn-timeframe').forEach(tab => {
  tab.addEventListener('click', () => {
    playSound('click');
    document.querySelectorAll('.btn-timeframe').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    currentAnalyticsTimeframe = tab.dataset.timeframe;
    renderAnalytics(currentAnalyticsTimeframe);
  });
});

function parseMinutesFromDurationStr(str, taskObj) {
  if (taskObj) {
    if (taskObj.goalType === 'text') return 0;
    if (typeof taskObj.totalMinutes === 'number' && taskObj.totalMinutes > 0) {
      return taskObj.totalMinutes;
    }
  }
  if (!str) return 0;
  const lower = str.toLowerCase();
  const hrMatch = lower.match(/(\d+)\s*h/);
  const minMatch = lower.match(/(\d+)\s*m/);
  if (hrMatch || minMatch) {
    const h = hrMatch ? parseInt(hrMatch[1], 10) : 0;
    const m = minMatch ? parseInt(minMatch[1], 10) : 0;
    return (h * 60) + m;
  }
  const num = parseInt(lower, 10);
  if (isNaN(num)) return 0;
  return num;
}

// Helper: Calculate authentic recorded focus minutes for any given date YYYY-MM-DD (Zero fake data)
function getMinutesForDate(dateStr) {
  let mins = 0;
  const todayStr = getTodayDateString();

  focusHistory.forEach(s => {
    if (s.date === dateStr) {
      mins += (s.minutes || 0);
    }
  });

  tasks.forEach(t => {
    if (t.completed) {
      if (t.completedDate === dateStr || (!t.completedDate && dateStr === todayStr)) {
        mins += parseMinutesFromDurationStr(t.duration, t);
      }
    }
  });

  if (dateStr === todayStr && swElapsedTime > 0) {
    mins += Math.floor(swElapsedTime / 60000);
  }

  return mins;
}

function renderAnalytics(timeframe) {
  if (!analyticsView) return;

  const now = new Date();
  let chartData = [];
  let periodTotalFocusMinutes = 0;

  if (timeframe === 'weekly') {
    if (analyticsRangeLabel) analyticsRangeLabel.textContent = 'This Week (Mon - Sun)';
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const currentDayIdx = (now.getDay() + 6) % 7;
    const monday = new Date(now);
    monday.setDate(now.getDate() - currentDayIdx);

    chartData = dayNames.map((day, idx) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + idx);
      const dStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const mins = getMinutesForDate(dStr);
      periodTotalFocusMinutes += mins;
      return { label: day, value: mins };
    });
  } else if (timeframe === 'monthly') {
    if (analyticsRangeLabel) analyticsRangeLabel.textContent = 'Current Month (Weekly Breakdown)';
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInCurMonth = new Date(year, month + 1, 0).getDate();

    const weekRanges = [
      { label: 'Week 1', start: 1, end: 7 },
      { label: 'Week 2', start: 8, end: 14 },
      { label: 'Week 3', start: 15, end: 21 },
      { label: 'Week 4', start: 22, end: daysInCurMonth }
    ];

    chartData = weekRanges.map(w => {
      let weekMins = 0;
      for (let day = w.start; day <= w.end; day++) {
        const dStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        weekMins += getMinutesForDate(dStr);
      }
      periodTotalFocusMinutes += weekMins;
      return { label: w.label, value: weekMins };
    });
  } else if (timeframe === 'yearly') {
    const year = now.getFullYear();
    if (analyticsRangeLabel) analyticsRangeLabel.textContent = `Yearly Overview (${year})`;
    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    chartData = monthLabels.map((m, monthIdx) => {
      let monthMins = 0;
      const daysInThisMonth = new Date(year, monthIdx + 1, 0).getDate();
      for (let day = 1; day <= daysInThisMonth; day++) {
        const dStr = `${year}-${String(monthIdx + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        monthMins += getMinutesForDate(dStr);
      }
      periodTotalFocusMinutes += monthMins;
      return { label: m, value: monthMins };
    });
  }

  const focusHours = Math.floor(periodTotalFocusMinutes / 60);
  const focusRemMins = periodTotalFocusMinutes % 60;
  if (metricFocusTime) {
    metricFocusTime.textContent = `${focusHours}h ${String(focusRemMins).padStart(2, '0')}m`;
  }

  const totalTasksCount = tasks.length;
  const completedTasks = tasks.filter(t => t.completed);
  const completedTasksCount = completedTasks.length;
  const ratio = totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;

  if (metricTasksDone) metricTasksDone.textContent = completedTasksCount;
  if (metricTasksRatio) metricTasksRatio.textContent = `${ratio}% Completion rate`;

  const breaksCount = breakRecords.length;
  const totalBreakMinutes = Math.round(totalBreakMs / 60000);
  if (metricBreaksCount) metricBreaksCount.textContent = breaksCount;
  if (metricBreaksTime) metricBreaksTime.textContent = `${totalBreakMinutes}m Total break`;

  let finalScore = 0;
  if (periodTotalFocusMinutes > 0 || completedTasksCount > 0) {
    const streakBonus = Math.min(20, streakCountValue * 5);
    const completionScore = ratio * 0.5;
    const focusScore = Math.min(30, Math.floor(periodTotalFocusMinutes / 10));
    finalScore = Math.min(100, Math.max(10, Math.round(completionScore + focusScore + streakBonus)));
  }
  if (metricScore) metricScore.textContent = `${finalScore}%`;

  if (barChartContainer) {
    barChartContainer.innerHTML = '';
    const maxVal = Math.max(...chartData.map(d => d.value), 30);

    chartData.forEach(item => {
      const barWrap = document.createElement('div');
      barWrap.className = 'chart-bar-wrap';
      const heightPercent = item.value > 0 ? Math.min(100, Math.max(8, Math.round((item.value / maxVal) * 100))) : 0;

      barWrap.innerHTML = `
        <span style="font-size:0.75rem; color:#94a3b8; font-weight:600;">${item.value}m</span>
        <div class="chart-bar-fill" style="height: ${heightPercent}%;"></div>
        <span class="chart-bar-label">${item.label}</span>
      `;
      barChartContainer.appendChild(barWrap);
    });
  }

  renderCategoryDistribution();
  renderSessionReflections();
  renderHeatmap();
}

// Feature #12: Category / Subject Focus Distribution
function renderCategoryDistribution() {
  if (!categoryDistContainer) return;
  categoryDistContainer.innerHTML = '';

  const catTotals = {};
  let grandTotal = 0;

  // Sum from focusHistory
  focusHistory.forEach(s => {
    const cat = s.category || 'Study';
    const mins = s.minutes || 0;
    if (mins > 0) {
      catTotals[cat] = (catTotals[cat] || 0) + mins;
      grandTotal += mins;
    }
  });

  // Sum from completed tasks
  tasks.forEach(t => {
    if (t.completed) {
      const cat = t.category || 'Study';
      const mins = Math.max(15, parseMinutesFromDurationStr(t.duration, t));
      catTotals[cat] = (catTotals[cat] || 0) + mins;
      grandTotal += mins;
    }
  });

  const entries = Object.entries(catTotals).sort((a, b) => b[1] - a[1]);

  if (entries.length === 0 || grandTotal === 0) {
    categoryDistContainer.innerHTML = `<div style="color:#64748b; font-size:0.84rem; padding:18px 0; text-align:center;">Complete tasks or focus sessions to see your subject distribution.</div>`;
    return;
  }

  entries.forEach(([cat, mins]) => {
    const pct = Math.round((mins / grandTotal) * 100);
    const row = document.createElement('div');
    row.className = 'cat-dist-row';
    row.innerHTML = `
      <div class="cat-dist-top">
        <span>#${escapeHtml(cat)}</span>
        <span>${mins}m (${pct}%)</span>
      </div>
      <div class="cat-dist-track">
        <div class="cat-dist-fill" style="width:${pct}%;"></div>
      </div>
    `;
    categoryDistContainer.appendChild(row);
  });
}

// Feature #13: Recent Focus Reflections & Star Ratings List
function renderSessionReflections() {
  if (!sessionReflectionsList) return;
  sessionReflectionsList.innerHTML = '';

  if (focusHistory.length === 0) {
    sessionReflectionsList.innerHTML = `<div style="color:#64748b; font-size:0.84rem; padding:18px 0; text-align:center;">No focus sessions logged yet. Finish a Timer or Pomodoro to rate your focus!</div>`;
    return;
  }

  const recent = focusHistory.slice(-10).reverse();
  recent.forEach(item => {
    const stars = '⭐'.repeat(item.rating || 5);
    const div = document.createElement('div');
    div.className = 'reflection-item';
    div.innerHTML = `
      <div class="reflection-item-top">
        <span class="reflection-task">${escapeHtml(item.task || 'Focus Session')} (${item.minutes || 0}m)</span>
        <span class="reflection-stars">${stars}</span>
      </div>
      ${item.note ? `<div class="reflection-note">"${escapeHtml(item.note)}"</div>` : `<div class="reflection-note" style="color:#64748b;">${escapeHtml(item.date || '')}</div>`}
    `;
    sessionReflectionsList.appendChild(div);
  });
}

// Feature #5: GitHub-Style 52-Week (364-Day) Contribution Heatmap (Strictly real data)
function renderHeatmap() {
  if (!heatmapGrid) return;
  heatmapGrid.innerHTML = '';

  const today = new Date();
  const totalDays = 52 * 7; // 364 days
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - (totalDays - 1));

  for (let i = 0; i < totalDays; i++) {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    const dStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const mins = getMinutesForDate(dStr);

    let levelClass = '';
    if (mins > 0 && mins < 30) levelClass = 'lvl-1';
    else if (mins >= 30 && mins < 90) levelClass = 'lvl-2';
    else if (mins >= 90 && mins < 180) levelClass = 'lvl-3';
    else if (mins >= 180) levelClass = 'lvl-4';

    const cell = document.createElement('div');
    cell.className = `heatmap-cell ${levelClass}`;
    cell.title = `${dStr}: ${mins} mins focus`;
    heatmapGrid.appendChild(cell);
  }
}

// =========================================================
// FEATURE #16: DAILY WRAP-UP SUMMARY REPORT MODAL
// =========================================================
function openWrapUpModal() {
  if (!wrapUpModal || !wrapUpContent) return;
  playSound('click');

  const todayStr = getTodayDateString();
  const yesterdayStr = getYesterdayDateString();
  const todayMins = getMinutesForDate(todayStr);
  const yesterdayMins = getMinutesForDate(yesterdayStr);

  const diffMins = todayMins - yesterdayMins;
  const diffText = diffMins >= 0
    ? `+${diffMins}m more than yesterday 📈`
    : `${diffMins}m compared to yesterday`;

  const completedTodayCount = tasks.filter(t => t.completed).length;
  const totalTasksCount = tasks.length;
  const level = Math.floor(userXP / 200) + 1;
  const rankIdx = Math.min(RANK_TITLES.length - 1, Math.floor((level - 1) / 2));

  wrapUpContent.innerHTML = `
    <div class="wrapup-grid">
      <div class="wrapup-stat-box">
        <div class="wrapup-stat-val">${todayMins}m</div>
        <div class="wrapup-stat-lbl">Today's Focus</div>
      </div>
      <div class="wrapup-stat-box">
        <div class="wrapup-stat-val">${completedTodayCount} / ${totalTasksCount}</div>
        <div class="wrapup-stat-lbl">Tasks Completed</div>
      </div>
      <div class="wrapup-stat-box">
        <div class="wrapup-stat-val">🔥 ${streakCountValue}</div>
        <div class="wrapup-stat-lbl">Day Streak</div>
      </div>
      <div class="wrapup-stat-box">
        <div class="wrapup-stat-val">💧 ${waterIntakeCount}/8</div>
        <div class="wrapup-stat-lbl">Hydration</div>
      </div>
      <div class="wrapup-stat-box">
        <div class="wrapup-stat-val">LVL ${level}</div>
        <div class="wrapup-stat-lbl">${RANK_TITLES[rankIdx]}</div>
      </div>
      <div class="wrapup-stat-box">
        <div class="wrapup-stat-val">${breakRecords.length}</div>
        <div class="wrapup-stat-lbl">Breaks Logged</div>
      </div>
    </div>
    <div class="wrapup-insight">
      <strong>Daily Performance Insight:</strong> You recorded <strong>${todayMins} minutes</strong> of focus today (${diffText}).
      ${todayMins >= (appSettings.dailyGoalMins || 180)
        ? '🎯 You crushed your Daily Focus Goal target today! Outstanding discipline.'
        : `Keep pushing — you are ${Math.max(0, (appSettings.dailyGoalMins || 180) - todayMins)}m away from your daily target ring!`}
    </div>
  `;

  wrapUpModal.classList.remove('hidden');
}

if (btnDailyWrapUp) {
  btnDailyWrapUp.addEventListener('click', openWrapUpModal);
}
if (wrapUpCloseBtn) {
  wrapUpCloseBtn.addEventListener('click', () => wrapUpModal.classList.add('hidden'));
}

// =========================================================
// FEATURE #20: SHAREABLE PNG PROGRESS CARD GENERATOR (CANVAS)
// =========================================================
function exportProgressCardPNG() {
  playSound('complete');
  const canvas = document.createElement('canvas');
  canvas.width = 960;
  canvas.height = 540;
  const ctx = canvas.getContext('2d');

  // Accent palette lookup
  const accentMap = {
    purple: { primary: '#7c3aed', light: '#c084fc', glow: '#4c1d95' },
    blue: { primary: '#2563eb', light: '#60a5fa', glow: '#1e3a8a' },
    emerald: { primary: '#059669', light: '#34d399', glow: '#064e3b' }
  };
  const pal = accentMap[appSettings.accent] || accentMap.purple;

  // Deep obsidian background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, 960, 540);
  bgGrad.addColorStop(0, '#07070c');
  bgGrad.addColorStop(1, '#11121d');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 960, 540);

  // Subtle accent glow circle
  const radGrad = ctx.createRadialGradient(820, 110, 20, 820, 110, 340);
  radGrad.addColorStop(0, pal.glow);
  radGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = radGrad;
  ctx.fillRect(0, 0, 960, 540);

  // Outer card border
  ctx.strokeStyle = pal.primary;
  ctx.lineWidth = 3;
  ctx.strokeRect(28, 28, 904, 484);

  // Brand Header
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 38px Inter, Segoe UI, sans-serif';
  ctx.fillText('ZENITH — FOCUS OS', 64, 96);

  ctx.fillStyle = pal.light;
  ctx.font = '600 18px Inter, Segoe UI, sans-serif';
  ctx.fillText(`DAILY PERFORMANCE REPORT  •  ${getTodayDateString()}`, 64, 130);

  // Stats calculation
  const todayMins = getMinutesForDate(getTodayDateString());
  const completedCount = tasks.filter(t => t.completed).length;
  const level = Math.floor(userXP / 200) + 1;
  const rankIdx = Math.min(RANK_TITLES.length - 1, Math.floor((level - 1) / 2));

  const boxes = [
    { label: 'TODAY FOCUS', val: `${todayMins} mins` },
    { label: 'TASKS COMPLETED', val: `${completedCount} / ${tasks.length}` },
    { label: 'LOGIN STREAK', val: `${streakCountValue} Days` },
    { label: 'RANK & LEVEL', val: `LVL ${level} (${RANK_TITLES[rankIdx]})` },
    { label: 'HYDRATION', val: `${waterIntakeCount} / 8 Glasses` },
    { label: 'TOTAL XP', val: `${userXP} XP` }
  ];

  boxes.forEach((b, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const x = 64 + col * 285;
    const y = 175 + row * 135;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fillRect(x, y, 260, 110);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, 260, 110);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 13px Inter, Segoe UI, sans-serif';
    ctx.fillText(b.label, x + 20, y + 36);

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 26px Inter, Segoe UI, sans-serif';
    ctx.fillText(b.val, x + 20, y + 78);
  });

  ctx.fillStyle = '#64748b';
  ctx.font = '500 15px Inter, Segoe UI, sans-serif';
  ctx.fillText('Generated by ZENITH Desktop Focus & Time OS', 64, 478);

  const dataUrl = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.download = `ZENITH-Progress-${getTodayDateString()}.png`;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  link.remove();

  showToast('Progress Card Exported 📄', 'High-res PNG report card downloaded!', '🖼️');
}

if (btnExportProgressCard) {
  btnExportProgressCard.addEventListener('click', exportProgressCardPNG);
}
if (btnWrapUpExportCard) {
  btnWrapUpExportCard.addEventListener('click', exportProgressCardPNG);
}

// =========================================================
// CALENDAR & AGENDA PLANNING
// =========================================================
let calCurrentDate = new Date();
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function renderCalendar() {
  const year = calCurrentDate.getFullYear();
  const month = calCurrentDate.getMonth();

  calendarMonthYear.textContent = `${monthNames[month]} ${year}`;
  calendarGrid.innerHTML = '';

  const firstDay = new Date(year, month, 1).getDay();
  const startingDayIndex = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const today = new Date();
  const todayStr = getTodayDateString();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

  for (let i = startingDayIndex - 1; i >= 0; i--) {
    const dayNum = daysInPrevMonth - i;
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const dateStr = `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
    const hasPlans = calendarPlans[dateStr] && calendarPlans[dateStr].length > 0;
    const isPast = dateStr < todayStr;

    const cell = createCalCell(dayNum, true, false, hasPlans, dateStr, isPast);
    calendarGrid.appendChild(cell);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = isCurrentMonth && d === today.getDate();
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const hasPlans = calendarPlans[dateStr] && calendarPlans[dateStr].length > 0;
    const isPast = dateStr < todayStr;

    const cell = createCalCell(d, false, isToday, hasPlans, dateStr, isPast);
    calendarGrid.appendChild(cell);
  }

  const totalCells = startingDayIndex + daysInMonth;
  const remainingCells = 42 - totalCells;
  const countToFill = remainingCells < 7 ? remainingCells : remainingCells - 7;

  for (let n = 1; n <= countToFill; n++) {
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;
    const dateStr = `${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-${String(n).padStart(2, '0')}`;
    const hasPlans = calendarPlans[dateStr] && calendarPlans[dateStr].length > 0;
    const isPast = dateStr < todayStr;

    const cell = createCalCell(n, true, false, hasPlans, dateStr, isPast);
    calendarGrid.appendChild(cell);
  }
}

function createCalCell(dayNum, isOtherMonth, isToday, hasPlans, dateStr, isPast) {
  const cell = document.createElement('div');
  cell.className = `cal-day-cell ${isOtherMonth ? 'other-month' : ''} ${isToday ? 'today' : ''} ${isPast ? 'past-day' : ''} ${hasPlans ? 'has-plans' : ''}`;
  cell.dataset.date = dateStr;

  cell.innerHTML = `
    <span class="cal-day-number">${dayNum}</span>
    <div style="display:flex; gap:3px; align-items:center;">
      ${isToday ? '<span class="cal-dot" title="Today"></span>' : ''}
      ${hasPlans ? '<span class="cal-plan-dot" title="Has plans"></span>' : ''}
    </div>
  `;

  cell.addEventListener('click', () => {
    playSound('click');
    document.querySelectorAll('.cal-day-cell').forEach(c => c.classList.remove('selected'));
    cell.classList.add('selected');
    openDayDetailModal(dateStr);
  });

  return cell;
}

btnCalPrev.addEventListener('click', () => {
  playSound('click');
  calCurrentDate.setMonth(calCurrentDate.getMonth() - 1);
  renderCalendar();
});

btnCalNext.addEventListener('click', () => {
  playSound('click');
  calCurrentDate.setMonth(calCurrentDate.getMonth() + 1);
  renderCalendar();
});

btnCalToday.addEventListener('click', () => {
  playSound('click');
  calCurrentDate = new Date();
  renderCalendar();
});

// =========================================================
// DAY DETAIL / AGENDA MODAL LOGIC
// =========================================================
function openDayDetailModal(dateStr) {
  selectedPlanDateStr = dateStr;
  const parts = dateStr.split('-');
  const dateObj = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  dayDetailDateTitle.textContent = dateObj.toLocaleDateString('en-US', options);

  renderDayPlans(dateStr);
  dayDetailModal.classList.remove('hidden');
}

function closeDayDetailModal() {
  dayDetailModal.classList.add('hidden');
}

dayDetailCloseBtn.addEventListener('click', closeDayDetailModal);

function renderDayPlans(dateStr) {
  const plans = calendarPlans[dateStr] || [];
  dayPlansList.innerHTML = '';

  if (plans.length === 0) {
    dayPlansList.innerHTML = '<li class="no-plans-msg">No plans scheduled for this day yet.</li>';
    return;
  }

  plans.forEach(plan => {
    const li = document.createElement('li');
    li.className = `day-plan-card ${plan.completed ? 'completed' : ''}`;
    li.innerHTML = `
      <div class="day-plan-info">
        <div class="day-plan-header">
          <span class="day-plan-title">${escapeHtml(plan.title)}</span>
          <span class="day-plan-time">${escapeHtml(plan.time)}</span>
        </div>
        ${plan.desc ? `<span class="day-plan-desc">${escapeHtml(plan.desc)}</span>` : ''}
      </div>
      <div class="day-plan-actions">
        <button class="btn-plan-toggle" type="button" data-action="toggle-plan" data-plan-id="${plan.id}" title="${plan.completed ? 'Mark as Incomplete' : 'Mark as Complete'}">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none">
            ${plan.completed 
              ? '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>'
              : '<circle cx="12" cy="12" r="9"></circle>'
            }
          </svg>
          <span>${plan.completed ? 'Done' : 'Complete'}</span>
        </button>
        <button class="btn-plan-delete" type="button" data-action="delete-plan" data-plan-id="${plan.id}" title="Delete Plan">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;

    dayPlansList.appendChild(li);
  });
}

dayPlansList.addEventListener('click', (e) => {
  const toggleBtn = e.target.closest('button[data-action="toggle-plan"]');
  const deleteBtn = e.target.closest('button[data-action="delete-plan"]');

  if (toggleBtn) {
    const planId = toggleBtn.dataset.planId;
    if (!selectedPlanDateStr || !calendarPlans[selectedPlanDateStr]) return;
    const plan = calendarPlans[selectedPlanDateStr].find(p => p.id === planId);
    if (plan) {
      plan.completed = !plan.completed;
      if (plan.completed) {
        playSound('complete');
        addXP(25, `Completed agenda plan: "${plan.title}"`);
      } else {
        playSound('click');
      }
      localStorage.setItem('calendar_plans', JSON.stringify(calendarPlans));
      renderDayPlans(selectedPlanDateStr);
    }
  } else if (deleteBtn) {
    const planId = deleteBtn.dataset.planId;
    if (!selectedPlanDateStr || !calendarPlans[selectedPlanDateStr]) return;

    calendarPlans[selectedPlanDateStr] = calendarPlans[selectedPlanDateStr].filter(p => p.id !== planId);
    if (calendarPlans[selectedPlanDateStr].length === 0) {
      delete calendarPlans[selectedPlanDateStr];
    }

    playSound('click');
    localStorage.setItem('calendar_plans', JSON.stringify(calendarPlans));
    renderDayPlans(selectedPlanDateStr);
    renderCalendar();
  }
});

// =========================================================
// ADD A PLAN MODAL LOGIC
// =========================================================
btnOpenAddPlan.addEventListener('click', () => {
  playSound('click');
  planTargetDateDisplay.textContent = selectedPlanDateStr;
  planForm.reset();
  planModal.classList.remove('hidden');
  setTimeout(() => planTitleInput.focus(), 50);
});

function closePlanModal() {
  planModal.classList.add('hidden');
}

planModalCloseBtn.addEventListener('click', closePlanModal);
planCancelBtn.addEventListener('click', closePlanModal);

planForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = planTitleInput.value.trim();
  const time = planTimeInput.value.trim();
  const desc = planDescInput.value.trim();

  if (!title || !time || !selectedPlanDateStr) return;

  if (!calendarPlans[selectedPlanDateStr]) {
    calendarPlans[selectedPlanDateStr] = [];
  }

  const newPlan = {
    id: Date.now().toString(),
    title,
    time,
    desc,
    completed: false,
    createdAt: new Date().toISOString()
  };

  calendarPlans[selectedPlanDateStr].push(newPlan);
  localStorage.setItem('calendar_plans', JSON.stringify(calendarPlans));

  playSound('click');
  closePlanModal();
  renderDayPlans(selectedPlanDateStr);
  renderCalendar();
  showToast('Agenda Plan Added', `${title} (${time})`, '📅');
});

// =========================================================
// SETTINGS MODAL LOGIC (INCLUDING #8, #18, #19)
// =========================================================
btnSettings.addEventListener('click', () => {
  playSound('click');
  settingsModal.classList.remove('hidden');
});

settingsCloseBtn.addEventListener('click', () => {
  playSound('click');
  settingsModal.classList.add('hidden');
});

selectThemeStyle.addEventListener('change', (e) => {
  appSettings.theme = e.target.value;
  saveSettings();
  applySettings();
  playSound('click');
});

document.querySelectorAll('.swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    appSettings.accent = swatch.dataset.color;
    saveSettings();
    applySettings();
    playSound('click');
  });
});

if (selectDailyGoalMins) {
  selectDailyGoalMins.addEventListener('change', (e) => {
    appSettings.dailyGoalMins = parseInt(e.target.value, 10) || 180;
    saveSettings();
    updateGoalRing();
    playSound('click');
    showToast('Daily Focus Goal Updated', `Target set to ${appSettings.dailyGoalMins} minutes/day.`, '🎯');
  });
}

if (toggleHealthNudge) {
  toggleHealthNudge.addEventListener('change', (e) => {
    appSettings.healthNudge = e.target.checked;
    saveSettings();
    playSound('click');
  });
}

// Feature #19: Launch on Windows Startup
if (toggleLaunchStartup) {
  toggleLaunchStartup.addEventListener('change', (e) => {
    appSettings.launchStartup = e.target.checked;
    saveSettings();
    playSound('click');
    if (window.electronAPI && window.electronAPI.setLaunchOnStartup) {
      window.electronAPI.setLaunchOnStartup(appSettings.launchStartup);
    }
    showToast(
      appSettings.launchStartup ? 'Launch on Startup Enabled' : 'Launch on Startup Disabled',
      appSettings.launchStartup ? 'ZENITH will open automatically when Windows starts.' : 'Auto-start disabled.',
      '🚀'
    );
  });
}

toggle24Hour.addEventListener('change', (e) => {
  appSettings.clock24h = e.target.checked;
  saveSettings();
  updateLiveClock();
  playSound('click');
});

toggleSounds.addEventListener('change', (e) => {
  appSettings.sounds = e.target.checked;
  saveSettings();
  if (appSettings.sounds) {
    playSound('complete');
  }
});

toggleDailyReset.addEventListener('change', (e) => {
  appSettings.dailyReset = e.target.checked;
  saveSettings();
  playSound('click');
});

// Export Backup (JSON)
btnExportData.addEventListener('click', () => {
  playSound('click');
  const exportPayload = {
    daily_tasks: tasks,
    calendar_plans: calendarPlans,
    app_focus_history: focusHistory,
    zenith_sticky_notes: stickyNotes,
    zenith_scratchpad_text: scratchpadTextarea ? scratchpadTextarea.value : '',
    zenith_user_xp: userXP,
    zenith_big_day: bigDayData,
    app_settings: appSettings,
    exported_at: new Date().toISOString()
  };

  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `zenith-backup-${getTodayDateString()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('JSON Backup Exported', 'Your workspace data has been downloaded.', '💾');
});

// Import Backup (JSON)
btnImportData.addEventListener('click', () => {
  playSound('click');
  importFileInput.click();
});

importFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);
      if (imported.daily_tasks && Array.isArray(imported.daily_tasks)) {
        tasks = imported.daily_tasks;
        saveTasks();
      }
      if (imported.calendar_plans && typeof imported.calendar_plans === 'object') {
        calendarPlans = imported.calendar_plans;
        localStorage.setItem('calendar_plans', JSON.stringify(calendarPlans));
      }
      if (imported.app_focus_history && Array.isArray(imported.app_focus_history)) {
        focusHistory = imported.app_focus_history;
        localStorage.setItem('app_focus_history', JSON.stringify(focusHistory));
      }
      if (imported.zenith_sticky_notes && Array.isArray(imported.zenith_sticky_notes)) {
        stickyNotes = imported.zenith_sticky_notes;
        saveStickyNotes();
      }
      if (typeof imported.zenith_user_xp === 'number') {
        userXP = imported.zenith_user_xp;
        localStorage.setItem('zenith_user_xp', userXP.toString());
        updateXPUI();
      }
      if (imported.zenith_big_day) {
        bigDayData = imported.zenith_big_day;
        localStorage.setItem('zenith_big_day', JSON.stringify(bigDayData));
        renderBigDay();
      }
      if (imported.app_settings) {
        appSettings = Object.assign(appSettings, imported.app_settings);
        saveSettings();
        applySettings();
      }

      playSound('complete');
      renderTasks();
      renderCalendar();
      showToast('Backup Restored!', 'All tasks, plans, and settings were imported.', '✅');
    } catch (err) {
      showToast('Import Error', 'Failed to import backup: Invalid JSON format.', '⚠️');
    }
  };
  reader.readAsText(file);
  importFileInput.value = '';
});

// Reset All Data
btnClearData.addEventListener('click', () => {
  if (confirm('Are you sure you want to permanently reset all tasks, notes, focus history, and calendar plans?')) {
    localStorage.removeItem('daily_tasks');
    localStorage.removeItem('calendar_plans');
    localStorage.removeItem('app_focus_history');
    localStorage.removeItem('zenith_sticky_notes');
    localStorage.removeItem('zenith_scratchpad_text');
    tasks = [];
    calendarPlans = {};
    focusHistory = [];
    stickyNotes = [];
    if (scratchpadTextarea) scratchpadTextarea.value = '';
    playSound('click');
    renderTasks();
    renderCalendar();
    renderStickyNotes();
    updateGoalRing();
    settingsModal.classList.add('hidden');
    showToast('Workspace Reset', 'All tasks and calendar plans have been cleared.', '🗑️');
  }
});

// Global Modal Backdrop & Escape Key Handlers
[taskModal, settingsModal, dayDetailModal, planModal, reflectionModal, bigDayModal, wrapUpModal].forEach(modal => {
  if (!modal) return;
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    [taskModal, settingsModal, dayDetailModal, planModal, reflectionModal, bigDayModal, wrapUpModal].forEach(m => {
      if (m) m.classList.add('hidden');
    });
  }
});

// =========================================================
// INITIALIZATION ON LOAD
// =========================================================
applySettings();
checkAndResetDailyTasks();
evaluateStreakOnStartup();
scheduleMidnightReset();
updateXPUI();
renderBigDay();
updateWaterUI();
updateGoalRing();
restoreBreaksAndTimerUI();
