/************************************* 
 * Circle_Rotation_Range2_Local Test *
 *************************************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'circle_rotation_range2_local';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const instru_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instru_trialsLoopBegin(instru_trialsLoopScheduler));
flowScheduler.add(instru_trialsLoopScheduler);
flowScheduler.add(instru_trialsLoopEnd);
const practice_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_loopLoopBegin(practice_loopLoopScheduler));
flowScheduler.add(practice_loopLoopScheduler);
flowScheduler.add(practice_loopLoopEnd);
flowScheduler.add(main_sessionRoutineBegin());
flowScheduler.add(main_sessionRoutineEachFrame());
flowScheduler.add(main_sessionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(byeRoutineBegin());
flowScheduler.add(byeRoutineEachFrame());
flowScheduler.add(byeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=67BA36CA', '');

  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcom_ins;
var welcome_resp;
var instruction1Clock;
var instru1;
var instru1_resp;
var instruction2Clock;
var instru2;
var instru2_resp;
var instruction3Clock;
var instru3;
var instru3_resp;
var instruction4Clock;
var instru4;
var instru4_resp;
var instruction5Clock;
var instru5;
var instru5_resp;
var instruction6Clock;
var instru6;
var instru6_resp;
var instruction7Clock;
var instru7;
var instru7_resp;
var recap_instructionClock;
var recap_instru;
var recap_resp;
var stimulusClock;
var fixation;
var left_gabor;
var right_gabor;
var conditions_csv;
var practice_csv;
var distractorClock;
var fixation2;
var left_distractor_prac;
var right_distractor_prac;
var cueClock;
var cue_text;
var fixation3;
var impulseClock;
var left_impulse;
var central_impulse;
var right_impulse;
var fixation4;
var responseClock;
var cue_resp;
var probe;
var probe_resp;
var mouse;
var feedbackClock;
var corr_number;
var feedback_text;
var ITIClock;
var buffer;
var end_training_feedbackClock;
var fail_number;
var end_feedback_text;
var key_resp_4;
var main_sessionClock;
var begin_text;
var key_resp_3;
var trial_index;
var stimulus_mainClock;
var fix_cross;
var left_target;
var right_target;
var distractor_mainClock;
var fix_cross2;
var left_distractor_main;
var right_distractor_main;
var cue_mainClock;
var main_cue;
var fix_cross3;
var impulse_mainClock;
var left_impulse_main;
var central_impulse_main;
var right_impulse_main;
var fix_cross4;
var restClock;
var take_break;
var break_text;
var byeClock;
var ending;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcom_ins = new visual.ImageStim({
    win : psychoJS.window,
    name : 'welcom_ins', units : undefined, 
    image : 'welcome.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.65, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  welcome_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction1"
  instruction1Clock = new util.Clock();
  instru1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instru1', units : undefined, 
    image : 'instruction1.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.65, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  instru1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction2"
  instruction2Clock = new util.Clock();
  instru2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instru2', units : undefined, 
    image : 'instruction2.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.65, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  instru2_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction3"
  instruction3Clock = new util.Clock();
  instru3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instru3', units : undefined, 
    image : 'instruction3.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.65, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  instru3_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction4"
  instruction4Clock = new util.Clock();
  instru4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instru4', units : undefined, 
    image : 'instruction4.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.65, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  instru4_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction5"
  instruction5Clock = new util.Clock();
  instru5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instru5', units : undefined, 
    image : 'instruction5.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.65, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  instru5_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction6"
  instruction6Clock = new util.Clock();
  instru6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instru6', units : undefined, 
    image : 'instruction6.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.65, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  instru6_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction7"
  instruction7Clock = new util.Clock();
  instru7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instru7', units : undefined, 
    image : 'instruction7.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.63, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  instru7_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recap_instruction"
  recap_instructionClock = new util.Clock();
  recap_instru = new visual.ImageStim({
    win : psychoJS.window,
    name : 'recap_instru', units : undefined, 
    image : 'recap.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1.65, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  recap_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "stimulus"
  stimulusClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  left_gabor = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_gabor', units : undefined, 
    image : 'gabor.png', mask : undefined,
    ori : 1.0, pos : [(- 0.25), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  right_gabor = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_gabor', units : undefined, 
    image : 'gabor.png', mask : undefined,
    ori : 1.0, pos : [0.25, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
  var rand_int = getRandomInt(1, 101)
  console.log(rand_int);
  conditions_csv = `conditions${rand_int}.csv`;
  practice_csv = `practice${rand_int}.csv`;
  // Initialize components for Routine "distractor"
  distractorClock = new util.Clock();
  fixation2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  left_distractor_prac = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_distractor_prac', units : undefined, 
    image : 'gabor.png', mask : undefined,
    ori : 1.0, pos : [(- 0.25), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  right_distractor_prac = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_distractor_prac', units : undefined, 
    image : 'gabor.png', mask : undefined,
    ori : 1.0, pos : [0.25, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "cue"
  cueClock = new util.Clock();
  cue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_text',
    text: 'cue will be set in code',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  fixation3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation3',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "impulse"
  impulseClock = new util.Clock();
  left_impulse = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_impulse', units : undefined, 
    image : 'impulse_probe.png', mask : undefined,
    ori : 0, pos : [(- 0.25), 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  central_impulse = new visual.ImageStim({
    win : psychoJS.window,
    name : 'central_impulse', units : undefined, 
    image : 'impulse_probe.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  right_impulse = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_impulse', units : undefined, 
    image : 'impulse_probe.png', mask : undefined,
    ori : 0, pos : [0.25, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  fixation4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation4',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "response"
  responseClock = new util.Clock();
  cue_resp = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_resp',
    text: 'Any text\n\nincluding line breaks',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  probe = new visual.ImageStim({
    win : psychoJS.window,
    name : 'probe', units : undefined, 
    image : 'gabor.png', mask : undefined,
    ori : 1.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  probe_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  corr_number = 0;
  
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: 'Any text\n\nincluding line breaks',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  buffer = new visual.TextStim({
    win: psychoJS.window,
    name: 'buffer',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end_training_feedback"
  end_training_feedbackClock = new util.Clock();
  fail_number = 0;
  
  end_feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_feedback_text',
    text: 'Any text\n\nincluding line breaks',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "main_session"
  main_sessionClock = new util.Clock();
  begin_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_text',
    text: 'Congratulation! You enter the main session!\nPlease press space button to start.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trial_index = 1;
  
  // Initialize components for Routine "stimulus_main"
  stimulus_mainClock = new util.Clock();
  fix_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  left_target = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_target', units : undefined, 
    image : 'gabor.png', mask : undefined,
    ori : 1.0, pos : [(- 0.25), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  right_target = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_target', units : undefined, 
    image : 'gabor.png', mask : undefined,
    ori : 1.0, pos : [0.25, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
  var rand_int = getRandomInt(1, 101)
  console.log(rand_int);
  conditions_csv = `conditions${rand_int}.csv`;
  practice_csv = `practice${rand_int}.csv`;
  // Initialize components for Routine "distractor_main"
  distractor_mainClock = new util.Clock();
  fix_cross2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  left_distractor_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_distractor_main', units : undefined, 
    image : 'gabor.png', mask : undefined,
    ori : 1.0, pos : [(- 0.25), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  right_distractor_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_distractor_main', units : undefined, 
    image : 'gabor.png', mask : undefined,
    ori : 1.0, pos : [0.25, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "cue_main"
  cue_mainClock = new util.Clock();
  main_cue = new visual.TextStim({
    win: psychoJS.window,
    name: 'main_cue',
    text: 'cue will be set in code',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  fix_cross3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross3',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "impulse_main"
  impulse_mainClock = new util.Clock();
  left_impulse_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_impulse_main', units : undefined, 
    image : 'impulse_probe.png', mask : undefined,
    ori : 0, pos : [(- 0.25), 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  central_impulse_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'central_impulse_main', units : undefined, 
    image : 'impulse_probe.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  right_impulse_main = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_impulse_main', units : undefined, 
    image : 'impulse_probe.png', mask : undefined,
    ori : 0, pos : [0.25, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  fix_cross4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross4',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "rest"
  restClock = new util.Clock();
  take_break = new visual.TextStim({
    win: psychoJS.window,
    name: 'take_break',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: 'Take a 30s short break.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "bye"
  byeClock = new util.Clock();
  ending = new visual.TextStim({
    win: psychoJS.window,
    name: 'ending',
    text: 'Congrats! You complete the whole experiment!\nThank you for participating!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _welcome_resp_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'welcome'-------
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    welcome_resp.keys = undefined;
    welcome_resp.rt = undefined;
    _welcome_resp_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcom_ins);
    welcomeComponents.push(welcome_resp);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'welcome'-------
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcom_ins* updates
    if (t >= 0.0 && welcom_ins.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcom_ins.tStart = t;  // (not accounting for frame time here)
      welcom_ins.frameNStart = frameN;  // exact frame index
      
      welcom_ins.setAutoDraw(true);
    }

    
    // *welcome_resp* updates
    if (t >= 0.0 && welcome_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_resp.tStart = t;  // (not accounting for frame time here)
      welcome_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcome_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcome_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcome_resp.clearEvents(); });
    }

    if (welcome_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcome_resp.getKeys({keyList: ['space'], waitRelease: false});
      _welcome_resp_allKeys = _welcome_resp_allKeys.concat(theseKeys);
      if (_welcome_resp_allKeys.length > 0) {
        welcome_resp.keys = _welcome_resp_allKeys[_welcome_resp_allKeys.length - 1].name;  // just the last key pressed
        welcome_resp.rt = _welcome_resp_allKeys[_welcome_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd() {
  return async function () {
    //------Ending Routine 'welcome'-------
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    welcome_resp.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instru_trials;
var currentLoop;
function instru_trialsLoopBegin(instru_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instru_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 99, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instru_trials'
    });
    psychoJS.experiment.addLoop(instru_trials); // add the loop to the experiment
    currentLoop = instru_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisInstru_trial of instru_trials) {
      const snapshot = instru_trials.getSnapshot();
      instru_trialsLoopScheduler.add(importConditions(snapshot));
      instru_trialsLoopScheduler.add(instruction1RoutineBegin(snapshot));
      instru_trialsLoopScheduler.add(instruction1RoutineEachFrame());
      instru_trialsLoopScheduler.add(instruction1RoutineEnd());
      instru_trialsLoopScheduler.add(instruction2RoutineBegin(snapshot));
      instru_trialsLoopScheduler.add(instruction2RoutineEachFrame());
      instru_trialsLoopScheduler.add(instruction2RoutineEnd());
      instru_trialsLoopScheduler.add(instruction3RoutineBegin(snapshot));
      instru_trialsLoopScheduler.add(instruction3RoutineEachFrame());
      instru_trialsLoopScheduler.add(instruction3RoutineEnd());
      instru_trialsLoopScheduler.add(instruction4RoutineBegin(snapshot));
      instru_trialsLoopScheduler.add(instruction4RoutineEachFrame());
      instru_trialsLoopScheduler.add(instruction4RoutineEnd());
      instru_trialsLoopScheduler.add(instruction5RoutineBegin(snapshot));
      instru_trialsLoopScheduler.add(instruction5RoutineEachFrame());
      instru_trialsLoopScheduler.add(instruction5RoutineEnd());
      instru_trialsLoopScheduler.add(instruction6RoutineBegin(snapshot));
      instru_trialsLoopScheduler.add(instruction6RoutineEachFrame());
      instru_trialsLoopScheduler.add(instruction6RoutineEnd());
      instru_trialsLoopScheduler.add(instruction7RoutineBegin(snapshot));
      instru_trialsLoopScheduler.add(instruction7RoutineEachFrame());
      instru_trialsLoopScheduler.add(instruction7RoutineEnd());
      instru_trialsLoopScheduler.add(recap_instructionRoutineBegin(snapshot));
      instru_trialsLoopScheduler.add(recap_instructionRoutineEachFrame());
      instru_trialsLoopScheduler.add(recap_instructionRoutineEnd());
      instru_trialsLoopScheduler.add(endLoopIteration(instru_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instru_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(instru_trials);

  return Scheduler.Event.NEXT;
}


var practice_loop;
function practice_loopLoopBegin(practice_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'practice_loop'
    });
    psychoJS.experiment.addLoop(practice_loop); // add the loop to the experiment
    currentLoop = practice_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice_loop of practice_loop) {
      const snapshot = practice_loop.getSnapshot();
      practice_loopLoopScheduler.add(importConditions(snapshot));
      const practiceLoopScheduler = new Scheduler(psychoJS);
      practice_loopLoopScheduler.add(practiceLoopBegin(practiceLoopScheduler, snapshot));
      practice_loopLoopScheduler.add(practiceLoopScheduler);
      practice_loopLoopScheduler.add(practiceLoopEnd);
      practice_loopLoopScheduler.add(end_training_feedbackRoutineBegin(snapshot));
      practice_loopLoopScheduler.add(end_training_feedbackRoutineEachFrame());
      practice_loopLoopScheduler.add(end_training_feedbackRoutineEnd());
      practice_loopLoopScheduler.add(endLoopIteration(practice_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var practice;
function practiceLoopBegin(practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: practice_csv,
      seed: undefined, name: 'practice'
    });
    psychoJS.experiment.addLoop(practice); // add the loop to the experiment
    currentLoop = practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice of practice) {
      const snapshot = practice.getSnapshot();
      practiceLoopScheduler.add(importConditions(snapshot));
      practiceLoopScheduler.add(stimulusRoutineBegin(snapshot));
      practiceLoopScheduler.add(stimulusRoutineEachFrame());
      practiceLoopScheduler.add(stimulusRoutineEnd());
      practiceLoopScheduler.add(distractorRoutineBegin(snapshot));
      practiceLoopScheduler.add(distractorRoutineEachFrame());
      practiceLoopScheduler.add(distractorRoutineEnd());
      practiceLoopScheduler.add(cueRoutineBegin(snapshot));
      practiceLoopScheduler.add(cueRoutineEachFrame());
      practiceLoopScheduler.add(cueRoutineEnd());
      practiceLoopScheduler.add(impulseRoutineBegin(snapshot));
      practiceLoopScheduler.add(impulseRoutineEachFrame());
      practiceLoopScheduler.add(impulseRoutineEnd());
      practiceLoopScheduler.add(responseRoutineBegin(snapshot));
      practiceLoopScheduler.add(responseRoutineEachFrame());
      practiceLoopScheduler.add(responseRoutineEnd());
      practiceLoopScheduler.add(feedbackRoutineBegin(snapshot));
      practiceLoopScheduler.add(feedbackRoutineEachFrame());
      practiceLoopScheduler.add(feedbackRoutineEnd());
      practiceLoopScheduler.add(ITIRoutineBegin(snapshot));
      practiceLoopScheduler.add(ITIRoutineEachFrame());
      practiceLoopScheduler.add(ITIRoutineEnd());
      practiceLoopScheduler.add(endLoopIteration(practiceLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practiceLoopEnd() {
  psychoJS.experiment.removeLoop(practice);

  return Scheduler.Event.NEXT;
}


async function practice_loopLoopEnd() {
  psychoJS.experiment.removeLoop(practice_loop);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditions_csv,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(stimulus_mainRoutineBegin(snapshot));
      trialsLoopScheduler.add(stimulus_mainRoutineEachFrame());
      trialsLoopScheduler.add(stimulus_mainRoutineEnd());
      trialsLoopScheduler.add(distractor_mainRoutineBegin(snapshot));
      trialsLoopScheduler.add(distractor_mainRoutineEachFrame());
      trialsLoopScheduler.add(distractor_mainRoutineEnd());
      trialsLoopScheduler.add(cue_mainRoutineBegin(snapshot));
      trialsLoopScheduler.add(cue_mainRoutineEachFrame());
      trialsLoopScheduler.add(cue_mainRoutineEnd());
      trialsLoopScheduler.add(impulse_mainRoutineBegin(snapshot));
      trialsLoopScheduler.add(impulse_mainRoutineEachFrame());
      trialsLoopScheduler.add(impulse_mainRoutineEnd());
      trialsLoopScheduler.add(responseRoutineBegin(snapshot));
      trialsLoopScheduler.add(responseRoutineEachFrame());
      trialsLoopScheduler.add(responseRoutineEnd());
      trialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      trialsLoopScheduler.add(ITIRoutineEachFrame());
      trialsLoopScheduler.add(ITIRoutineEnd());
      trialsLoopScheduler.add(restRoutineBegin(snapshot));
      trialsLoopScheduler.add(restRoutineEachFrame());
      trialsLoopScheduler.add(restRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _instru1_resp_allKeys;
var instruction1Components;
function instruction1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction1'-------
    t = 0;
    instruction1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instru1_resp.keys = undefined;
    instru1_resp.rt = undefined;
    _instru1_resp_allKeys = [];
    // keep track of which components have finished
    instruction1Components = [];
    instruction1Components.push(instru1);
    instruction1Components.push(instru1_resp);
    
    for (const thisComponent of instruction1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction1'-------
    // get current time
    t = instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instru1* updates
    if (t >= 0.0 && instru1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru1.tStart = t;  // (not accounting for frame time here)
      instru1.frameNStart = frameN;  // exact frame index
      
      instru1.setAutoDraw(true);
    }

    
    // *instru1_resp* updates
    if (t >= 0.0 && instru1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru1_resp.tStart = t;  // (not accounting for frame time here)
      instru1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instru1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instru1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instru1_resp.clearEvents(); });
    }

    if (instru1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instru1_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instru1_resp_allKeys = _instru1_resp_allKeys.concat(theseKeys);
      if (_instru1_resp_allKeys.length > 0) {
        instru1_resp.keys = _instru1_resp_allKeys[_instru1_resp_allKeys.length - 1].name;  // just the last key pressed
        instru1_resp.rt = _instru1_resp_allKeys[_instru1_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction1RoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction1'-------
    for (const thisComponent of instruction1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instru1_resp.stop();
    // the Routine "instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instru2_resp_allKeys;
var instruction2Components;
function instruction2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction2'-------
    t = 0;
    instruction2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instru2_resp.keys = undefined;
    instru2_resp.rt = undefined;
    _instru2_resp_allKeys = [];
    // keep track of which components have finished
    instruction2Components = [];
    instruction2Components.push(instru2);
    instruction2Components.push(instru2_resp);
    
    for (const thisComponent of instruction2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction2'-------
    // get current time
    t = instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instru2* updates
    if (t >= 0.0 && instru2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru2.tStart = t;  // (not accounting for frame time here)
      instru2.frameNStart = frameN;  // exact frame index
      
      instru2.setAutoDraw(true);
    }

    
    // *instru2_resp* updates
    if (t >= 0.0 && instru2_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru2_resp.tStart = t;  // (not accounting for frame time here)
      instru2_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instru2_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instru2_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instru2_resp.clearEvents(); });
    }

    if (instru2_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instru2_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instru2_resp_allKeys = _instru2_resp_allKeys.concat(theseKeys);
      if (_instru2_resp_allKeys.length > 0) {
        instru2_resp.keys = _instru2_resp_allKeys[_instru2_resp_allKeys.length - 1].name;  // just the last key pressed
        instru2_resp.rt = _instru2_resp_allKeys[_instru2_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction2RoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction2'-------
    for (const thisComponent of instruction2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instru2_resp.stop();
    // the Routine "instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instru3_resp_allKeys;
var instruction3Components;
function instruction3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction3'-------
    t = 0;
    instruction3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instru3_resp.keys = undefined;
    instru3_resp.rt = undefined;
    _instru3_resp_allKeys = [];
    // keep track of which components have finished
    instruction3Components = [];
    instruction3Components.push(instru3);
    instruction3Components.push(instru3_resp);
    
    for (const thisComponent of instruction3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction3'-------
    // get current time
    t = instruction3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instru3* updates
    if (t >= 0.0 && instru3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru3.tStart = t;  // (not accounting for frame time here)
      instru3.frameNStart = frameN;  // exact frame index
      
      instru3.setAutoDraw(true);
    }

    
    // *instru3_resp* updates
    if (t >= 0.0 && instru3_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru3_resp.tStart = t;  // (not accounting for frame time here)
      instru3_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instru3_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instru3_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instru3_resp.clearEvents(); });
    }

    if (instru3_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instru3_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instru3_resp_allKeys = _instru3_resp_allKeys.concat(theseKeys);
      if (_instru3_resp_allKeys.length > 0) {
        instru3_resp.keys = _instru3_resp_allKeys[_instru3_resp_allKeys.length - 1].name;  // just the last key pressed
        instru3_resp.rt = _instru3_resp_allKeys[_instru3_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction3RoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction3'-------
    for (const thisComponent of instruction3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instru3_resp.stop();
    // the Routine "instruction3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instru4_resp_allKeys;
var instruction4Components;
function instruction4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction4'-------
    t = 0;
    instruction4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instru4_resp.keys = undefined;
    instru4_resp.rt = undefined;
    _instru4_resp_allKeys = [];
    // keep track of which components have finished
    instruction4Components = [];
    instruction4Components.push(instru4);
    instruction4Components.push(instru4_resp);
    
    for (const thisComponent of instruction4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction4'-------
    // get current time
    t = instruction4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instru4* updates
    if (t >= 0.0 && instru4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru4.tStart = t;  // (not accounting for frame time here)
      instru4.frameNStart = frameN;  // exact frame index
      
      instru4.setAutoDraw(true);
    }

    
    // *instru4_resp* updates
    if (t >= 0.0 && instru4_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru4_resp.tStart = t;  // (not accounting for frame time here)
      instru4_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instru4_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instru4_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instru4_resp.clearEvents(); });
    }

    if (instru4_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instru4_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instru4_resp_allKeys = _instru4_resp_allKeys.concat(theseKeys);
      if (_instru4_resp_allKeys.length > 0) {
        instru4_resp.keys = _instru4_resp_allKeys[_instru4_resp_allKeys.length - 1].name;  // just the last key pressed
        instru4_resp.rt = _instru4_resp_allKeys[_instru4_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction4RoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction4'-------
    for (const thisComponent of instruction4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instru4_resp.stop();
    // the Routine "instruction4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instru5_resp_allKeys;
var instruction5Components;
function instruction5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction5'-------
    t = 0;
    instruction5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instru5_resp.keys = undefined;
    instru5_resp.rt = undefined;
    _instru5_resp_allKeys = [];
    // keep track of which components have finished
    instruction5Components = [];
    instruction5Components.push(instru5);
    instruction5Components.push(instru5_resp);
    
    for (const thisComponent of instruction5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction5'-------
    // get current time
    t = instruction5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instru5* updates
    if (t >= 0.0 && instru5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru5.tStart = t;  // (not accounting for frame time here)
      instru5.frameNStart = frameN;  // exact frame index
      
      instru5.setAutoDraw(true);
    }

    
    // *instru5_resp* updates
    if (t >= 0.0 && instru5_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru5_resp.tStart = t;  // (not accounting for frame time here)
      instru5_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instru5_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instru5_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instru5_resp.clearEvents(); });
    }

    if (instru5_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instru5_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instru5_resp_allKeys = _instru5_resp_allKeys.concat(theseKeys);
      if (_instru5_resp_allKeys.length > 0) {
        instru5_resp.keys = _instru5_resp_allKeys[_instru5_resp_allKeys.length - 1].name;  // just the last key pressed
        instru5_resp.rt = _instru5_resp_allKeys[_instru5_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction5RoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction5'-------
    for (const thisComponent of instruction5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instru5_resp.stop();
    // the Routine "instruction5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instru6_resp_allKeys;
var instruction6Components;
function instruction6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction6'-------
    t = 0;
    instruction6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instru6_resp.keys = undefined;
    instru6_resp.rt = undefined;
    _instru6_resp_allKeys = [];
    // keep track of which components have finished
    instruction6Components = [];
    instruction6Components.push(instru6);
    instruction6Components.push(instru6_resp);
    
    for (const thisComponent of instruction6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction6RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction6'-------
    // get current time
    t = instruction6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instru6* updates
    if (t >= 0.0 && instru6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru6.tStart = t;  // (not accounting for frame time here)
      instru6.frameNStart = frameN;  // exact frame index
      
      instru6.setAutoDraw(true);
    }

    
    // *instru6_resp* updates
    if (t >= 0.0 && instru6_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru6_resp.tStart = t;  // (not accounting for frame time here)
      instru6_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instru6_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instru6_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instru6_resp.clearEvents(); });
    }

    if (instru6_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instru6_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instru6_resp_allKeys = _instru6_resp_allKeys.concat(theseKeys);
      if (_instru6_resp_allKeys.length > 0) {
        instru6_resp.keys = _instru6_resp_allKeys[_instru6_resp_allKeys.length - 1].name;  // just the last key pressed
        instru6_resp.rt = _instru6_resp_allKeys[_instru6_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction6RoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction6'-------
    for (const thisComponent of instruction6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instru6_resp.stop();
    // the Routine "instruction6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instru7_resp_allKeys;
var instruction7Components;
function instruction7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction7'-------
    t = 0;
    instruction7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    instru7_resp.keys = undefined;
    instru7_resp.rt = undefined;
    _instru7_resp_allKeys = [];
    // keep track of which components have finished
    instruction7Components = [];
    instruction7Components.push(instru7);
    instruction7Components.push(instru7_resp);
    
    for (const thisComponent of instruction7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction7RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction7'-------
    // get current time
    t = instruction7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instru7* updates
    if (t >= 0.0 && instru7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru7.tStart = t;  // (not accounting for frame time here)
      instru7.frameNStart = frameN;  // exact frame index
      
      instru7.setAutoDraw(true);
    }

    
    // *instru7_resp* updates
    if (t >= 0.0 && instru7_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru7_resp.tStart = t;  // (not accounting for frame time here)
      instru7_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instru7_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instru7_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instru7_resp.clearEvents(); });
    }

    if (instru7_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instru7_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instru7_resp_allKeys = _instru7_resp_allKeys.concat(theseKeys);
      if (_instru7_resp_allKeys.length > 0) {
        instru7_resp.keys = _instru7_resp_allKeys[_instru7_resp_allKeys.length - 1].name;  // just the last key pressed
        instru7_resp.rt = _instru7_resp_allKeys[_instru7_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction7RoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction7'-------
    for (const thisComponent of instruction7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    instru7_resp.stop();
    // the Routine "instruction7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _recap_resp_allKeys;
var recap_instructionComponents;
function recap_instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'recap_instruction'-------
    t = 0;
    recap_instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    recap_resp.keys = undefined;
    recap_resp.rt = undefined;
    _recap_resp_allKeys = [];
    // keep track of which components have finished
    recap_instructionComponents = [];
    recap_instructionComponents.push(recap_instru);
    recap_instructionComponents.push(recap_resp);
    
    for (const thisComponent of recap_instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function recap_instructionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'recap_instruction'-------
    // get current time
    t = recap_instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *recap_instru* updates
    if (t >= 0.0 && recap_instru.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recap_instru.tStart = t;  // (not accounting for frame time here)
      recap_instru.frameNStart = frameN;  // exact frame index
      
      recap_instru.setAutoDraw(true);
    }

    
    // *recap_resp* updates
    if (t >= 0.0 && recap_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      recap_resp.tStart = t;  // (not accounting for frame time here)
      recap_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { recap_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { recap_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { recap_resp.clearEvents(); });
    }

    if (recap_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = recap_resp.getKeys({keyList: ['space', 'r'], waitRelease: false});
      _recap_resp_allKeys = _recap_resp_allKeys.concat(theseKeys);
      if (_recap_resp_allKeys.length > 0) {
        recap_resp.keys = _recap_resp_allKeys[_recap_resp_allKeys.length - 1].name;  // just the last key pressed
        recap_resp.rt = _recap_resp_allKeys[_recap_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of recap_instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recap_instructionRoutineEnd() {
  return async function () {
    //------Ending Routine 'recap_instruction'-------
    for (const thisComponent of recap_instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    recap_resp.stop();
    if ((recap_resp.keys === "space")) {
        instru_trials.finished = true;
    }
    
    // the Routine "recap_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stimulusComponents;
function stimulusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stimulus'-------
    t = 0;
    stimulusClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.600000);
    // update component parameters for each repeat
    left_gabor.setOri(left_gabor_ori);
    right_gabor.setOri(right_gabor_ori);
    document.body.style.cursor='none';
    
    // keep track of which components have finished
    stimulusComponents = [];
    stimulusComponents.push(fixation);
    stimulusComponents.push(left_gabor);
    stimulusComponents.push(right_gabor);
    
    for (const thisComponent of stimulusComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function stimulusRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stimulus'-------
    // get current time
    t = stimulusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    
    // *left_gabor* updates
    if (t >= 0.0 && left_gabor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_gabor.tStart = t;  // (not accounting for frame time here)
      left_gabor.frameNStart = frameN;  // exact frame index
      
      left_gabor.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_gabor.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_gabor.setAutoDraw(false);
    }
    
    // *right_gabor* updates
    if (t >= 0.0 && right_gabor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_gabor.tStart = t;  // (not accounting for frame time here)
      right_gabor.frameNStart = frameN;  // exact frame index
      
      right_gabor.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_gabor.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_gabor.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stimulusComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimulusRoutineEnd() {
  return async function () {
    //------Ending Routine 'stimulus'-------
    for (const thisComponent of stimulusComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var distractorComponents;
function distractorRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'distractor'-------
    t = 0;
    distractorClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.600000);
    // update component parameters for each repeat
    left_distractor_prac.setOri(left_distractor_ori);
    right_distractor_prac.setOri(right_distractor_ori);
    // keep track of which components have finished
    distractorComponents = [];
    distractorComponents.push(fixation2);
    distractorComponents.push(left_distractor_prac);
    distractorComponents.push(right_distractor_prac);
    
    for (const thisComponent of distractorComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function distractorRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'distractor'-------
    // get current time
    t = distractorClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation2* updates
    if (t >= 0.0 && fixation2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation2.tStart = t;  // (not accounting for frame time here)
      fixation2.frameNStart = frameN;  // exact frame index
      
      fixation2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation2.setAutoDraw(false);
    }
    
    // *left_distractor_prac* updates
    if (t >= 0.0 && left_distractor_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_distractor_prac.tStart = t;  // (not accounting for frame time here)
      left_distractor_prac.frameNStart = frameN;  // exact frame index
      
      left_distractor_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_distractor_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_distractor_prac.setAutoDraw(false);
    }
    
    // *right_distractor_prac* updates
    if (t >= 0.0 && right_distractor_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_distractor_prac.tStart = t;  // (not accounting for frame time here)
      right_distractor_prac.frameNStart = frameN;  // exact frame index
      
      right_distractor_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_distractor_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_distractor_prac.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of distractorComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function distractorRoutineEnd() {
  return async function () {
    //------Ending Routine 'distractor'-------
    for (const thisComponent of distractorComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var cueComponents;
function cueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'cue'-------
    t = 0;
    cueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    if ((cue === "neutral")) {
        cue_text.setText("<>");
    } else {
        if ((cue === "right")) {
            cue_text.setText(">");
        } else {
            if ((cue === "left")) {
                cue_text.setText("<");
            } else {
                console.log("cue not found");
            }
        }
    }
    
    // keep track of which components have finished
    cueComponents = [];
    cueComponents.push(cue_text);
    cueComponents.push(fixation3);
    
    for (const thisComponent of cueComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function cueRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'cue'-------
    // get current time
    t = cueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_text* updates
    if (t >= 0.0 && cue_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_text.tStart = t;  // (not accounting for frame time here)
      cue_text.frameNStart = frameN;  // exact frame index
      
      cue_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cue_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cue_text.setAutoDraw(false);
    }
    
    // *fixation3* updates
    if (t >= 0 && fixation3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation3.tStart = t;  // (not accounting for frame time here)
      fixation3.frameNStart = frameN;  // exact frame index
      
      fixation3.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cueComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cueRoutineEnd() {
  return async function () {
    //------Ending Routine 'cue'-------
    for (const thisComponent of cueComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var impulseComponents;
function impulseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'impulse'-------
    t = 0;
    impulseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.600000);
    // update component parameters for each repeat
    // keep track of which components have finished
    impulseComponents = [];
    impulseComponents.push(left_impulse);
    impulseComponents.push(central_impulse);
    impulseComponents.push(right_impulse);
    impulseComponents.push(fixation4);
    
    for (const thisComponent of impulseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function impulseRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'impulse'-------
    // get current time
    t = impulseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *left_impulse* updates
    if (t >= 0.0 && left_impulse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_impulse.tStart = t;  // (not accounting for frame time here)
      left_impulse.frameNStart = frameN;  // exact frame index
      
      left_impulse.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_impulse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_impulse.setAutoDraw(false);
    }
    
    // *central_impulse* updates
    if (t >= 0.0 && central_impulse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      central_impulse.tStart = t;  // (not accounting for frame time here)
      central_impulse.frameNStart = frameN;  // exact frame index
      
      central_impulse.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (central_impulse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      central_impulse.setAutoDraw(false);
    }
    
    // *right_impulse* updates
    if (t >= 0.0 && right_impulse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_impulse.tStart = t;  // (not accounting for frame time here)
      right_impulse.frameNStart = frameN;  // exact frame index
      
      right_impulse.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_impulse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_impulse.setAutoDraw(false);
    }
    
    // *fixation4* updates
    if (t >= 0.2 && fixation4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation4.tStart = t;  // (not accounting for frame time here)
      fixation4.frameNStart = frameN;  // exact frame index
      
      fixation4.setAutoDraw(true);
    }

    frameRemains = 0.2 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of impulseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function impulseRoutineEnd() {
  return async function () {
    //------Ending Routine 'impulse'-------
    for (const thisComponent of impulseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _probe_resp_allKeys;
var start_time;
var gotValidClick;
var responseComponents;
function responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'response'-------
    t = 0;
    responseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    probe.setPos([0, 0]);
    probe_resp.keys = undefined;
    probe_resp.rt = undefined;
    _probe_resp_allKeys = [];
    document.body.style.cursor='auto';
    start_time = globalClock.getTime();
    if ((cue === "neutral")) {
        if ((probe_x > 0)) {
            cue_resp.setText(">");
        } else if ((probe_x < 0)) {
            cue_resp.setText(">");
        } else {
            console.log("not found");
        }
    } else {
        if (((cue === "right"))||((cue === "left"))) {
            cue_resp.setText("<>");
        } else {
            console.log("cue not found");
        }
    }
    
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    responseComponents = [];
    responseComponents.push(cue_resp);
    responseComponents.push(probe);
    responseComponents.push(probe_resp);
    responseComponents.push(mouse);
    
    for (const thisComponent of responseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function responseRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'response'-------
    // get current time
    t = responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_resp* updates
    if (t >= 0.0 && cue_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_resp.tStart = t;  // (not accounting for frame time here)
      cue_resp.frameNStart = frameN;  // exact frame index
      
      cue_resp.setAutoDraw(true);
    }

    
    // *probe* updates
    if (t >= 0.0 && probe.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe.tStart = t;  // (not accounting for frame time here)
      probe.frameNStart = frameN;  // exact frame index
      
      probe.setAutoDraw(true);
    }

    
    if (probe.status === PsychoJS.Status.STARTED){ // only update if being drawn
      probe.setOri(probe_ori, false);
    }
    
    // *probe_resp* updates
    if (t >= 0.0 && probe_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe_resp.tStart = t;  // (not accounting for frame time here)
      probe_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { probe_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { probe_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { probe_resp.clearEvents(); });
    }

    if (probe_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = probe_resp.getKeys({keyList: ['space'], waitRelease: false});
      _probe_resp_allKeys = _probe_resp_allKeys.concat(theseKeys);
      if (_probe_resp_allKeys.length > 0) {
        probe_resp.keys = _probe_resp_allKeys[_probe_resp_allKeys.length - 1].name;  // just the last key pressed
        probe_resp.rt = _probe_resp_allKeys[_probe_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    var mouse_pos = mouse.getPos();
    var delta_x  = mouse_pos[0] - probe.pos[0];
    var delta_y  = mouse_pos[1] - probe.pos[1];
    var radians = Math.atan2(delta_x, delta_y);
    var angle = radians * (180 / pi);
    console.log(angle)
    probe.ori = -1 * angle;
    
    if (((globalClock.getTime() - start_time) >= 5)) {
        continueRoutine = false;
        }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of responseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function responseRoutineEnd() {
  return async function () {
    //------Ending Routine 'response'-------
    for (const thisComponent of responseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('probe_resp.keys', probe_resp.keys);
    if (typeof probe_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('probe_resp.rt', probe_resp.rt);
        routineTimer.reset();
        }
    
    probe_resp.stop();
    if ((probe.ori > 180)) {
        probe.ori -= 180;
        }
    psychoJS.experiment.addData('response_ori', probe.ori);
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var response_ori;
var degrees_off;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    response_ori = ((360 - probe.ori) % 180);
    degrees_off = Math.abs(((response_ori % 180) - ((360 - correct_response) % 180)));
    if ((degrees_off > 90)) {
        degrees_off=(180-degrees_off);
    }
    if ((probe_resp.keys === undefined)) {
        feedback_text.setText("Oops, you missed the response. Please respond within 5 seconds.");
    } else {
        if ((Math.round(degrees_off) <= 20)) {
            corr_number += 1;
            feedback_text.setText("You did a great job on that!");
        } else {
            feedback_text.setText("You were off a few degrees. You can do better next time.");
        }
    }
    
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'ITI'-------
    t = 0;
    ITIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    ITIComponents = [];
    ITIComponents.push(buffer);
    
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ITIRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'ITI'-------
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *buffer* updates
    if (t >= 0.0 && buffer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buffer.tStart = t;  // (not accounting for frame time here)
      buffer.frameNStart = frameN;  // exact frame index
      
      buffer.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (buffer.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      buffer.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITIRoutineEnd() {
  return async function () {
    //------Ending Routine 'ITI'-------
    for (const thisComponent of ITIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var total_acc;
var _key_resp_4_allKeys;
var end_training_feedbackComponents;
function end_training_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'end_training_feedback'-------
    t = 0;
    end_training_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    total_acc = Math.round(((corr_number / practice.nTotal) * 100));
    if ((total_acc >= 75)) {
        end_feedback_text.setText("Your total accuracy in practice session is above 80%.\nYou can enter to the main session.\nPress space button to continue.");
        practice_loop.finished = true;
    } else {
        corr_number = 0;
        fail_number += 1;
        if ((fail_number === 5)) {
            end_feedback_text.setText("You failed too many times. Thanks for your interest! Please email 'P5DONE' to researcher and get 0.5 credit. \n Press space to exit.");
        } else {
            end_feedback_text.setText((("Your total accuracy in practice session is " + total_acc.toString()) + "%.\nPlease practice one more time.\nPress space button to repeat the practice session."));
        }
    }
    
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    end_training_feedbackComponents = [];
    end_training_feedbackComponents.push(end_feedback_text);
    end_training_feedbackComponents.push(key_resp_4);
    
    for (const thisComponent of end_training_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_training_feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'end_training_feedback'-------
    // get current time
    t = end_training_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_feedback_text* updates
    if (t >= 0.0 && end_feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_feedback_text.tStart = t;  // (not accounting for frame time here)
      end_feedback_text.frameNStart = frameN;  // exact frame index
      
      end_feedback_text.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 2 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_training_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_training_feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'end_training_feedback'-------
    for (const thisComponent of end_training_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((fail_number === 5)) {
        psychoJS.quit();
    }
    
    key_resp_4.stop();
    // the Routine "end_training_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var main_sessionComponents;
function main_sessionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'main_session'-------
    t = 0;
    main_sessionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    main_sessionComponents = [];
    main_sessionComponents.push(begin_text);
    main_sessionComponents.push(key_resp_3);
    
    for (const thisComponent of main_sessionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_sessionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'main_session'-------
    // get current time
    t = main_sessionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *begin_text* updates
    if (t >= 0.0 && begin_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_text.tStart = t;  // (not accounting for frame time here)
      begin_text.frameNStart = frameN;  // exact frame index
      
      begin_text.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_sessionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_sessionRoutineEnd() {
  return async function () {
    //------Ending Routine 'main_session'-------
    for (const thisComponent of main_sessionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "main_session" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var stimulus_mainComponents;
function stimulus_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'stimulus_main'-------
    t = 0;
    stimulus_mainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    left_target.setOri(left_gabor_ori);
    right_target.setOri(right_gabor_ori);
    document.body.style.cursor='none';
    
    // keep track of which components have finished
    stimulus_mainComponents = [];
    stimulus_mainComponents.push(fix_cross);
    stimulus_mainComponents.push(left_target);
    stimulus_mainComponents.push(right_target);
    
    for (const thisComponent of stimulus_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimulus_mainRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'stimulus_main'-------
    // get current time
    t = stimulus_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cross* updates
    if (t >= 0.0 && fix_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross.tStart = t;  // (not accounting for frame time here)
      fix_cross.frameNStart = frameN;  // exact frame index
      
      fix_cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross.setAutoDraw(false);
    }
    
    // *left_target* updates
    if (t >= 0.0 && left_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_target.tStart = t;  // (not accounting for frame time here)
      left_target.frameNStart = frameN;  // exact frame index
      
      left_target.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_target.setAutoDraw(false);
    }
    
    // *right_target* updates
    if (t >= 0.0 && right_target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_target.tStart = t;  // (not accounting for frame time here)
      right_target.frameNStart = frameN;  // exact frame index
      
      right_target.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_target.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_target.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of stimulus_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimulus_mainRoutineEnd() {
  return async function () {
    //------Ending Routine 'stimulus_main'-------
    for (const thisComponent of stimulus_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var distractor_mainComponents;
function distractor_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'distractor_main'-------
    t = 0;
    distractor_mainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    left_distractor_main.setOri(left_distractor_ori);
    right_distractor_main.setOri(right_distractor_ori);
    // keep track of which components have finished
    distractor_mainComponents = [];
    distractor_mainComponents.push(fix_cross2);
    distractor_mainComponents.push(left_distractor_main);
    distractor_mainComponents.push(right_distractor_main);
    
    for (const thisComponent of distractor_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function distractor_mainRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'distractor_main'-------
    // get current time
    t = distractor_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cross2* updates
    if (t >= 0.0 && fix_cross2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross2.tStart = t;  // (not accounting for frame time here)
      fix_cross2.frameNStart = frameN;  // exact frame index
      
      fix_cross2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross2.setAutoDraw(false);
    }
    
    // *left_distractor_main* updates
    if (t >= 0.0 && left_distractor_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_distractor_main.tStart = t;  // (not accounting for frame time here)
      left_distractor_main.frameNStart = frameN;  // exact frame index
      
      left_distractor_main.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_distractor_main.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_distractor_main.setAutoDraw(false);
    }
    
    // *right_distractor_main* updates
    if (t >= 0.0 && right_distractor_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_distractor_main.tStart = t;  // (not accounting for frame time here)
      right_distractor_main.frameNStart = frameN;  // exact frame index
      
      right_distractor_main.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_distractor_main.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_distractor_main.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of distractor_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function distractor_mainRoutineEnd() {
  return async function () {
    //------Ending Routine 'distractor_main'-------
    for (const thisComponent of distractor_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var cue_mainComponents;
function cue_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'cue_main'-------
    t = 0;
    cue_mainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.900000);
    // update component parameters for each repeat
    if ((cue === "neutral")) {
        main_cue.setText("<>");
    } else {
        if ((cue === "right")) {
            main_cue.setText(">");
        } else {
            if ((cue === "left")) {
                main_cue.setText("<");
            } else {
                console.log("cue not found");
            }
        }
    }
    
    // keep track of which components have finished
    cue_mainComponents = [];
    cue_mainComponents.push(main_cue);
    cue_mainComponents.push(fix_cross3);
    
    for (const thisComponent of cue_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function cue_mainRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'cue_main'-------
    // get current time
    t = cue_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_cue* updates
    if (t >= 0.0 && main_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_cue.tStart = t;  // (not accounting for frame time here)
      main_cue.frameNStart = frameN;  // exact frame index
      
      main_cue.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (main_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      main_cue.setAutoDraw(false);
    }
    
    // *fix_cross3* updates
    if (t >= 0 && fix_cross3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross3.tStart = t;  // (not accounting for frame time here)
      fix_cross3.frameNStart = frameN;  // exact frame index
      
      fix_cross3.setAutoDraw(true);
    }

    frameRemains = 0 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cue_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cue_mainRoutineEnd() {
  return async function () {
    //------Ending Routine 'cue_main'-------
    for (const thisComponent of cue_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var impulse_mainComponents;
function impulse_mainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'impulse_main'-------
    t = 0;
    impulse_mainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    impulse_mainComponents = [];
    impulse_mainComponents.push(left_impulse_main);
    impulse_mainComponents.push(central_impulse_main);
    impulse_mainComponents.push(right_impulse_main);
    impulse_mainComponents.push(fix_cross4);
    
    for (const thisComponent of impulse_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function impulse_mainRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'impulse_main'-------
    // get current time
    t = impulse_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *left_impulse_main* updates
    if (t >= 0.0 && left_impulse_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_impulse_main.tStart = t;  // (not accounting for frame time here)
      left_impulse_main.frameNStart = frameN;  // exact frame index
      
      left_impulse_main.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_impulse_main.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_impulse_main.setAutoDraw(false);
    }
    
    // *central_impulse_main* updates
    if (t >= 0.0 && central_impulse_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      central_impulse_main.tStart = t;  // (not accounting for frame time here)
      central_impulse_main.frameNStart = frameN;  // exact frame index
      
      central_impulse_main.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (central_impulse_main.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      central_impulse_main.setAutoDraw(false);
    }
    
    // *right_impulse_main* updates
    if (t >= 0.0 && right_impulse_main.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_impulse_main.tStart = t;  // (not accounting for frame time here)
      right_impulse_main.frameNStart = frameN;  // exact frame index
      
      right_impulse_main.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_impulse_main.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_impulse_main.setAutoDraw(false);
    }
    
    // *fix_cross4* updates
    if (t >= 0.1 && fix_cross4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross4.tStart = t;  // (not accounting for frame time here)
      fix_cross4.frameNStart = frameN;  // exact frame index
      
      fix_cross4.setAutoDraw(true);
    }

    frameRemains = 0.1 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of impulse_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function impulse_mainRoutineEnd() {
  return async function () {
    //------Ending Routine 'impulse_main'-------
    for (const thisComponent of impulse_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var restComponents;
function restRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'rest'-------
    t = 0;
    restClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    restComponents = [];
    restComponents.push(take_break);
    restComponents.push(break_text);
    
    for (const thisComponent of restComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function restRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'rest'-------
    // get current time
    t = restClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((((((snapshot.thisN + 1) % 50) === 0) && (snapshot.thisN > 0)) && (snapshot.thisN !== 299))) {
        continueRoutine = true;
    } else {
        continueRoutine = false;
    }
    
    
    // *take_break* updates
    if (t >= 0.0 && take_break.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      take_break.tStart = t;  // (not accounting for frame time here)
      take_break.frameNStart = frameN;  // exact frame index
      
      take_break.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (take_break.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      take_break.setAutoDraw(false);
    }
    
    if (take_break.status === PsychoJS.Status.STARTED){ // only update if being drawn
      take_break.setText(util.round((30 - t)), false);
    }
    
    // *break_text* updates
    if (t >= 0.0 && break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_text.tStart = t;  // (not accounting for frame time here)
      break_text.frameNStart = frameN;  // exact frame index
      
      break_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of restComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function restRoutineEnd() {
  return async function () {
    //------Ending Routine 'rest'-------
    for (const thisComponent of restComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var byeComponents;
function byeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'bye'-------
    t = 0;
    byeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    byeComponents = [];
    byeComponents.push(ending);
    
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function byeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'bye'-------
    // get current time
    t = byeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ending* updates
    if (t >= 0.0 && ending.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ending.tStart = t;  // (not accounting for frame time here)
      ending.frameNStart = frameN;  // exact frame index
      
      ending.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ending.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ending.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function byeRoutineEnd() {
  return async function () {
    //------Ending Routine 'bye'-------
    for (const thisComponent of byeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
