#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on Wed Nov 30 13:59:36 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'circle_rotation_long_behav'  # from the Builder filename that created this script
expInfo = {'participant': ''}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/xitchen/Desktop/WM_Precision_thalap_EEG/LONG_BEHAV_NO_TRIGGER_circle_rotation_range2_local_750ms_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[2560, 1440], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "welcome"
welcomeClock = core.Clock()
welcom_ins = visual.ImageStim(
    win=win,
    name='welcom_ins', 
    image='welcome.png', mask=None,
    ori=0, pos=(0, 0), size=(1.65,1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
welcome_resp = keyboard.Keyboard()

# Initialize components for Routine "instruction1"
instruction1Clock = core.Clock()
instru1 = visual.ImageStim(
    win=win,
    name='instru1', 
    image='instruction1.png', mask=None,
    ori=0, pos=(0, 0), size=(1.65, 1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
instru1_resp = keyboard.Keyboard()

# Initialize components for Routine "instruction2"
instruction2Clock = core.Clock()
instru2 = visual.ImageStim(
    win=win,
    name='instru2', 
    image='instruction2.png', mask=None,
    ori=0, pos=(0, 0), size=(1.65, 1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
instru2_resp = keyboard.Keyboard()

# Initialize components for Routine "instruction3"
instruction3Clock = core.Clock()
instru3 = visual.ImageStim(
    win=win,
    name='instru3', 
    image='instruction3.png', mask=None,
    ori=0, pos=(0, 0), size=(1.65, 1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
instru3_resp = keyboard.Keyboard()

# Initialize components for Routine "instruction4"
instruction4Clock = core.Clock()
instru4 = visual.ImageStim(
    win=win,
    name='instru4', 
    image='instruction4.jpg', mask=None,
    ori=0, pos=(0, 0), size=(1.65, 1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
instru4_resp = keyboard.Keyboard()

# Initialize components for Routine "instruction5"
instruction5Clock = core.Clock()
instru5 = visual.ImageStim(
    win=win,
    name='instru5', 
    image='instruction5.jpg', mask=None,
    ori=0, pos=(0, 0), size=(1.65, 1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
instru5_resp = keyboard.Keyboard()

# Initialize components for Routine "instruction6"
instruction6Clock = core.Clock()
instru6 = visual.ImageStim(
    win=win,
    name='instru6', 
    image='instruction6.jpg', mask=None,
    ori=0, pos=(0, 0), size=(1.65, 1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
instru6_resp = keyboard.Keyboard()

# Initialize components for Routine "recap_instruction"
recap_instructionClock = core.Clock()
recap_instru = visual.ImageStim(
    win=win,
    name='recap_instru', 
    image='recap.jpg', mask=None,
    ori=0, pos=(0, 0), size=(1.65, 1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
recap_resp = keyboard.Keyboard()

# Initialize components for Routine "stimulus"
stimulusClock = core.Clock()
fixation = visual.TextStim(win=win, name='fixation',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
left_gabor = visual.ImageStim(
    win=win,
    name='left_gabor', 
    image='gabor.png', mask=None,
    ori=1.0, pos=(-0.25, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
right_gabor = visual.ImageStim(
    win=win,
    name='right_gabor', 
    image='gabor.png', mask=None,
    ori=1.0, pos=(0.25, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
import random
rand_int = random.randint(1,100)
conditions_csv = f'320trials/conditions{rand_int}.csv'
practice_csv = f'320trials/practice{rand_int}.csv'

# Initialize components for Routine "distractor"
distractorClock = core.Clock()
fixation2 = visual.TextStim(win=win, name='fixation2',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
left_distractor_prac = visual.ImageStim(
    win=win,
    name='left_distractor_prac', 
    image='gabor.png', mask=None,
    ori=1.0, pos=(-0.25, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
right_distractor_prac = visual.ImageStim(
    win=win,
    name='right_distractor_prac', 
    image='gabor.png', mask=None,
    ori=1.0, pos=(0.25, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)

# Initialize components for Routine "cue"
cueClock = core.Clock()
cue_text = visual.TextStim(win=win, name='cue_text',
    text='cue will be set in code',
    font='Arial',
    pos=(0, 0.2), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
fixation3 = visual.TextStim(win=win, name='fixation3',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "response"
responseClock = core.Clock()
cue_resp = visual.TextStim(win=win, name='cue_resp',
    text='Any text\n\nincluding line breaks',
    font='Arial',
    pos=(0, 0.2), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
probe = visual.ImageStim(
    win=win,
    name='probe', 
    image='gabor.png', mask=None,
    ori=1.0, pos=[0,0], size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
from math import atan2, degrees

def get_angle(pos1, pos2):
    delta_x = pos1[0] - pos2[0]
    delta_y = pos1[1] - pos2[1]
    radians = atan2(delta_x, delta_y)
    angle = degrees(radians)
    
    return angle
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# Initialize components for Routine "feedback"
feedbackClock = core.Clock()
corr_number = 0
feedback_text = visual.TextStim(win=win, name='feedback_text',
    text='Any text\n\nincluding line breaks',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "ITI"
ITIClock = core.Clock()
buffer = visual.TextStim(win=win, name='buffer',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "end_training_feedback"
end_training_feedbackClock = core.Clock()
fail_number=0
end_feedback_text = visual.TextStim(win=win, name='end_feedback_text',
    text='Any text\n\nincluding line breaks',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "main_session"
main_sessionClock = core.Clock()
begin_text = visual.TextStim(win=win, name='begin_text',
    text='Congratulation! You enter the main session!\nYour task is identical to the practice session, but the stimuli will be displayed slightly faster.\n\nPlease press space button to start.',
    font='Arial',
    pos=(0, 0), height=0.08, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_3 = keyboard.Keyboard()
trial_index = 1

# Initialize components for Routine "stimulus_main"
stimulus_mainClock = core.Clock()
fix_cross = visual.TextStim(win=win, name='fix_cross',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
left_target = visual.ImageStim(
    win=win,
    name='left_target', 
    image='gabor.png', mask=None,
    ori=1.0, pos=(-0.25, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
right_target = visual.ImageStim(
    win=win,
    name='right_target', 
    image='gabor.png', mask=None,
    ori=1.0, pos=(0.25, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
#import random
#import serial

#rand_int = random.randint(1,100)
#conditions_csv = f'conditions{rand_int}.csv'
#practice_csv = f'practice{rand_int}.csv'

#port=serial.Serial('COM7',baudrate=115200)
#port.close()

#startSaveflag=bytes([254])
#stopSaveflag=bytes([255])

#cuetrigDict={'left':101,'neutral':103,'right':105}
#target_trig=151
#distractor_trig=153

#probe_trig=155
#subResp_trig=157
#subNonResp_trig=159

#endofBlock_trig=161

#port.open()
#port.write(startSaveflag)

# Initialize components for Routine "distractor_main"
distractor_mainClock = core.Clock()
fix_cross2 = visual.TextStim(win=win, name='fix_cross2',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
left_distractor_main = visual.ImageStim(
    win=win,
    name='left_distractor_main', 
    image='gabor.png', mask=None,
    ori=1.0, pos=(-0.25, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
right_distractor_main = visual.ImageStim(
    win=win,
    name='right_distractor_main', 
    image='gabor.png', mask=None,
    ori=1.0, pos=(0.25, 0), size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)

# Initialize components for Routine "cue_main"
cue_mainClock = core.Clock()
main_cue = visual.TextStim(win=win, name='main_cue',
    text='cue will be set in code',
    font='Arial',
    pos=(0, 0.2), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
fix_cross3 = visual.TextStim(win=win, name='fix_cross3',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "response"
responseClock = core.Clock()
cue_resp = visual.TextStim(win=win, name='cue_resp',
    text='Any text\n\nincluding line breaks',
    font='Arial',
    pos=(0, 0.2), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
probe = visual.ImageStim(
    win=win,
    name='probe', 
    image='gabor.png', mask=None,
    ori=1.0, pos=[0,0], size=(0.3, 0.3),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-1.0)
from math import atan2, degrees

def get_angle(pos1, pos2):
    delta_x = pos1[0] - pos2[0]
    delta_y = pos1[1] - pos2[1]
    radians = atan2(delta_x, delta_y)
    angle = degrees(radians)
    
    return angle
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()

# Initialize components for Routine "ITI"
ITIClock = core.Clock()
buffer = visual.TextStim(win=win, name='buffer',
    text='+',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "rest"
restClock = core.Clock()
take_break = visual.TextStim(win=win, name='take_break',
    text='',
    font='Arial',
    pos=(0, -0.1), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
break_text = visual.TextStim(win=win, name='break_text',
    text='Take a 30s short break.',
    font='Arial',
    pos=(0, 0.1), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);

# Initialize components for Routine "bye"
byeClock = core.Clock()
ending = visual.TextStim(win=win, name='ending',
    text='Congrats! You complete the whole experiment!\nThank you for participating!',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "welcome"-------
continueRoutine = True
# update component parameters for each repeat
welcome_resp.keys = []
welcome_resp.rt = []
_welcome_resp_allKeys = []
# keep track of which components have finished
welcomeComponents = [welcom_ins, welcome_resp]
for thisComponent in welcomeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
welcomeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "welcome"-------
while continueRoutine:
    # get current time
    t = welcomeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=welcomeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *welcom_ins* updates
    if welcom_ins.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcom_ins.frameNStart = frameN  # exact frame index
        welcom_ins.tStart = t  # local t and not account for scr refresh
        welcom_ins.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcom_ins, 'tStartRefresh')  # time at next scr refresh
        welcom_ins.setAutoDraw(True)
    
    # *welcome_resp* updates
    waitOnFlip = False
    if welcome_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_resp.frameNStart = frameN  # exact frame index
        welcome_resp.tStart = t  # local t and not account for scr refresh
        welcome_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_resp, 'tStartRefresh')  # time at next scr refresh
        welcome_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(welcome_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(welcome_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if welcome_resp.status == STARTED and not waitOnFlip:
        theseKeys = welcome_resp.getKeys(keyList=['space'], waitRelease=False)
        _welcome_resp_allKeys.extend(theseKeys)
        if len(_welcome_resp_allKeys):
            welcome_resp.keys = _welcome_resp_allKeys[-1].name  # just the last key pressed
            welcome_resp.rt = _welcome_resp_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in welcomeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "welcome"-------
for thisComponent in welcomeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "welcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
instru_trials = data.TrialHandler(nReps=99, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='instru_trials')
thisExp.addLoop(instru_trials)  # add the loop to the experiment
thisInstru_trial = instru_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisInstru_trial.rgb)
if thisInstru_trial != None:
    for paramName in thisInstru_trial:
        exec('{} = thisInstru_trial[paramName]'.format(paramName))

for thisInstru_trial in instru_trials:
    currentLoop = instru_trials
    # abbreviate parameter names if possible (e.g. rgb = thisInstru_trial.rgb)
    if thisInstru_trial != None:
        for paramName in thisInstru_trial:
            exec('{} = thisInstru_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "instruction1"-------
    continueRoutine = True
    # update component parameters for each repeat
    instru1_resp.keys = []
    instru1_resp.rt = []
    _instru1_resp_allKeys = []
    # keep track of which components have finished
    instruction1Components = [instru1, instru1_resp]
    for thisComponent in instruction1Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instruction1Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instruction1"-------
    while continueRoutine:
        # get current time
        t = instruction1Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instruction1Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instru1* updates
        if instru1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instru1.frameNStart = frameN  # exact frame index
            instru1.tStart = t  # local t and not account for scr refresh
            instru1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instru1, 'tStartRefresh')  # time at next scr refresh
            instru1.setAutoDraw(True)
        
        # *instru1_resp* updates
        waitOnFlip = False
        if instru1_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instru1_resp.frameNStart = frameN  # exact frame index
            instru1_resp.tStart = t  # local t and not account for scr refresh
            instru1_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instru1_resp, 'tStartRefresh')  # time at next scr refresh
            instru1_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instru1_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instru1_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instru1_resp.status == STARTED and not waitOnFlip:
            theseKeys = instru1_resp.getKeys(keyList=['space'], waitRelease=False)
            _instru1_resp_allKeys.extend(theseKeys)
            if len(_instru1_resp_allKeys):
                instru1_resp.keys = _instru1_resp_allKeys[-1].name  # just the last key pressed
                instru1_resp.rt = _instru1_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction1Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instruction1"-------
    for thisComponent in instruction1Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "instruction2"-------
    continueRoutine = True
    # update component parameters for each repeat
    instru2_resp.keys = []
    instru2_resp.rt = []
    _instru2_resp_allKeys = []
    # keep track of which components have finished
    instruction2Components = [instru2, instru2_resp]
    for thisComponent in instruction2Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instruction2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instruction2"-------
    while continueRoutine:
        # get current time
        t = instruction2Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instruction2Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instru2* updates
        if instru2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instru2.frameNStart = frameN  # exact frame index
            instru2.tStart = t  # local t and not account for scr refresh
            instru2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instru2, 'tStartRefresh')  # time at next scr refresh
            instru2.setAutoDraw(True)
        
        # *instru2_resp* updates
        waitOnFlip = False
        if instru2_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instru2_resp.frameNStart = frameN  # exact frame index
            instru2_resp.tStart = t  # local t and not account for scr refresh
            instru2_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instru2_resp, 'tStartRefresh')  # time at next scr refresh
            instru2_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instru2_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instru2_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instru2_resp.status == STARTED and not waitOnFlip:
            theseKeys = instru2_resp.getKeys(keyList=['space'], waitRelease=False)
            _instru2_resp_allKeys.extend(theseKeys)
            if len(_instru2_resp_allKeys):
                instru2_resp.keys = _instru2_resp_allKeys[-1].name  # just the last key pressed
                instru2_resp.rt = _instru2_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction2Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instruction2"-------
    for thisComponent in instruction2Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "instruction3"-------
    continueRoutine = True
    # update component parameters for each repeat
    instru3_resp.keys = []
    instru3_resp.rt = []
    _instru3_resp_allKeys = []
    # keep track of which components have finished
    instruction3Components = [instru3, instru3_resp]
    for thisComponent in instruction3Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instruction3Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instruction3"-------
    while continueRoutine:
        # get current time
        t = instruction3Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instruction3Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instru3* updates
        if instru3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instru3.frameNStart = frameN  # exact frame index
            instru3.tStart = t  # local t and not account for scr refresh
            instru3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instru3, 'tStartRefresh')  # time at next scr refresh
            instru3.setAutoDraw(True)
        
        # *instru3_resp* updates
        waitOnFlip = False
        if instru3_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instru3_resp.frameNStart = frameN  # exact frame index
            instru3_resp.tStart = t  # local t and not account for scr refresh
            instru3_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instru3_resp, 'tStartRefresh')  # time at next scr refresh
            instru3_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instru3_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instru3_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instru3_resp.status == STARTED and not waitOnFlip:
            theseKeys = instru3_resp.getKeys(keyList=['space'], waitRelease=False)
            _instru3_resp_allKeys.extend(theseKeys)
            if len(_instru3_resp_allKeys):
                instru3_resp.keys = _instru3_resp_allKeys[-1].name  # just the last key pressed
                instru3_resp.rt = _instru3_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction3Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instruction3"-------
    for thisComponent in instruction3Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "instruction3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "instruction4"-------
    continueRoutine = True
    # update component parameters for each repeat
    instru4_resp.keys = []
    instru4_resp.rt = []
    _instru4_resp_allKeys = []
    # keep track of which components have finished
    instruction4Components = [instru4, instru4_resp]
    for thisComponent in instruction4Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instruction4Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instruction4"-------
    while continueRoutine:
        # get current time
        t = instruction4Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instruction4Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instru4* updates
        if instru4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instru4.frameNStart = frameN  # exact frame index
            instru4.tStart = t  # local t and not account for scr refresh
            instru4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instru4, 'tStartRefresh')  # time at next scr refresh
            instru4.setAutoDraw(True)
        
        # *instru4_resp* updates
        waitOnFlip = False
        if instru4_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instru4_resp.frameNStart = frameN  # exact frame index
            instru4_resp.tStart = t  # local t and not account for scr refresh
            instru4_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instru4_resp, 'tStartRefresh')  # time at next scr refresh
            instru4_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instru4_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instru4_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instru4_resp.status == STARTED and not waitOnFlip:
            theseKeys = instru4_resp.getKeys(keyList=['space'], waitRelease=False)
            _instru4_resp_allKeys.extend(theseKeys)
            if len(_instru4_resp_allKeys):
                instru4_resp.keys = _instru4_resp_allKeys[-1].name  # just the last key pressed
                instru4_resp.rt = _instru4_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction4Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instruction4"-------
    for thisComponent in instruction4Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "instruction4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "instruction5"-------
    continueRoutine = True
    # update component parameters for each repeat
    instru5_resp.keys = []
    instru5_resp.rt = []
    _instru5_resp_allKeys = []
    # keep track of which components have finished
    instruction5Components = [instru5, instru5_resp]
    for thisComponent in instruction5Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instruction5Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instruction5"-------
    while continueRoutine:
        # get current time
        t = instruction5Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instruction5Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instru5* updates
        if instru5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instru5.frameNStart = frameN  # exact frame index
            instru5.tStart = t  # local t and not account for scr refresh
            instru5.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instru5, 'tStartRefresh')  # time at next scr refresh
            instru5.setAutoDraw(True)
        
        # *instru5_resp* updates
        waitOnFlip = False
        if instru5_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instru5_resp.frameNStart = frameN  # exact frame index
            instru5_resp.tStart = t  # local t and not account for scr refresh
            instru5_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instru5_resp, 'tStartRefresh')  # time at next scr refresh
            instru5_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instru5_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instru5_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instru5_resp.status == STARTED and not waitOnFlip:
            theseKeys = instru5_resp.getKeys(keyList=['space'], waitRelease=False)
            _instru5_resp_allKeys.extend(theseKeys)
            if len(_instru5_resp_allKeys):
                instru5_resp.keys = _instru5_resp_allKeys[-1].name  # just the last key pressed
                instru5_resp.rt = _instru5_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction5Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instruction5"-------
    for thisComponent in instruction5Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "instruction5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "instruction6"-------
    continueRoutine = True
    # update component parameters for each repeat
    instru6_resp.keys = []
    instru6_resp.rt = []
    _instru6_resp_allKeys = []
    # keep track of which components have finished
    instruction6Components = [instru6, instru6_resp]
    for thisComponent in instruction6Components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    instruction6Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "instruction6"-------
    while continueRoutine:
        # get current time
        t = instruction6Clock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=instruction6Clock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instru6* updates
        if instru6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instru6.frameNStart = frameN  # exact frame index
            instru6.tStart = t  # local t and not account for scr refresh
            instru6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instru6, 'tStartRefresh')  # time at next scr refresh
            instru6.setAutoDraw(True)
        
        # *instru6_resp* updates
        waitOnFlip = False
        if instru6_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instru6_resp.frameNStart = frameN  # exact frame index
            instru6_resp.tStart = t  # local t and not account for scr refresh
            instru6_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instru6_resp, 'tStartRefresh')  # time at next scr refresh
            instru6_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instru6_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instru6_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instru6_resp.status == STARTED and not waitOnFlip:
            theseKeys = instru6_resp.getKeys(keyList=['space'], waitRelease=False)
            _instru6_resp_allKeys.extend(theseKeys)
            if len(_instru6_resp_allKeys):
                instru6_resp.keys = _instru6_resp_allKeys[-1].name  # just the last key pressed
                instru6_resp.rt = _instru6_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction6Components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "instruction6"-------
    for thisComponent in instruction6Components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "instruction6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "recap_instruction"-------
    continueRoutine = True
    # update component parameters for each repeat
    recap_resp.keys = []
    recap_resp.rt = []
    _recap_resp_allKeys = []
    # keep track of which components have finished
    recap_instructionComponents = [recap_instru, recap_resp]
    for thisComponent in recap_instructionComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    recap_instructionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "recap_instruction"-------
    while continueRoutine:
        # get current time
        t = recap_instructionClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=recap_instructionClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *recap_instru* updates
        if recap_instru.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            recap_instru.frameNStart = frameN  # exact frame index
            recap_instru.tStart = t  # local t and not account for scr refresh
            recap_instru.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(recap_instru, 'tStartRefresh')  # time at next scr refresh
            recap_instru.setAutoDraw(True)
        
        # *recap_resp* updates
        waitOnFlip = False
        if recap_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            recap_resp.frameNStart = frameN  # exact frame index
            recap_resp.tStart = t  # local t and not account for scr refresh
            recap_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(recap_resp, 'tStartRefresh')  # time at next scr refresh
            recap_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(recap_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(recap_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if recap_resp.status == STARTED and not waitOnFlip:
            theseKeys = recap_resp.getKeys(keyList=['space', 'r'], waitRelease=False)
            _recap_resp_allKeys.extend(theseKeys)
            if len(_recap_resp_allKeys):
                recap_resp.keys = _recap_resp_allKeys[-1].name  # just the last key pressed
                recap_resp.rt = _recap_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in recap_instructionComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "recap_instruction"-------
    for thisComponent in recap_instructionComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    if recap_resp.keys=='space':
        instru_trials.finished=True
    # the Routine "recap_instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 99 repeats of 'instru_trials'


# set up handler to look after randomisation of conditions etc
practice_loop = data.TrialHandler(nReps=10, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='practice_loop')
thisExp.addLoop(practice_loop)  # add the loop to the experiment
thisPractice_loop = practice_loop.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisPractice_loop.rgb)
if thisPractice_loop != None:
    for paramName in thisPractice_loop:
        exec('{} = thisPractice_loop[paramName]'.format(paramName))

for thisPractice_loop in practice_loop:
    currentLoop = practice_loop
    # abbreviate parameter names if possible (e.g. rgb = thisPractice_loop.rgb)
    if thisPractice_loop != None:
        for paramName in thisPractice_loop:
            exec('{} = thisPractice_loop[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    practice = data.TrialHandler(nReps=1, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(practice_csv),
        seed=None, name='practice')
    thisExp.addLoop(practice)  # add the loop to the experiment
    thisPractice = practice.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
    if thisPractice != None:
        for paramName in thisPractice:
            exec('{} = thisPractice[paramName]'.format(paramName))
    
    for thisPractice in practice:
        currentLoop = practice
        # abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
        if thisPractice != None:
            for paramName in thisPractice:
                exec('{} = thisPractice[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "stimulus"-------
        continueRoutine = True
        routineTimer.add(2.000000)
        # update component parameters for each repeat
        left_gabor.setOri(left_gabor_ori)
        right_gabor.setOri(right_gabor_ori)
        win.mouseVisible = False
        # keep track of which components have finished
        stimulusComponents = [fixation, left_gabor, right_gabor]
        for thisComponent in stimulusComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        stimulusClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "stimulus"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = stimulusClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=stimulusClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixation* updates
            if fixation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation.frameNStart = frameN  # exact frame index
                fixation.tStart = t  # local t and not account for scr refresh
                fixation.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation, 'tStartRefresh')  # time at next scr refresh
                fixation.setAutoDraw(True)
            if fixation.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation.tStop = t  # not accounting for scr refresh
                    fixation.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation, 'tStopRefresh')  # time at next scr refresh
                    fixation.setAutoDraw(False)
            
            # *left_gabor* updates
            if left_gabor.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                left_gabor.frameNStart = frameN  # exact frame index
                left_gabor.tStart = t  # local t and not account for scr refresh
                left_gabor.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(left_gabor, 'tStartRefresh')  # time at next scr refresh
                left_gabor.setAutoDraw(True)
            if left_gabor.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > left_gabor.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    left_gabor.tStop = t  # not accounting for scr refresh
                    left_gabor.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(left_gabor, 'tStopRefresh')  # time at next scr refresh
                    left_gabor.setAutoDraw(False)
            
            # *right_gabor* updates
            if right_gabor.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                right_gabor.frameNStart = frameN  # exact frame index
                right_gabor.tStart = t  # local t and not account for scr refresh
                right_gabor.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(right_gabor, 'tStartRefresh')  # time at next scr refresh
                right_gabor.setAutoDraw(True)
            if right_gabor.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > right_gabor.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    right_gabor.tStop = t  # not accounting for scr refresh
                    right_gabor.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(right_gabor, 'tStopRefresh')  # time at next scr refresh
                    right_gabor.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in stimulusComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "stimulus"-------
        for thisComponent in stimulusComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        practice.addData('fixation.started', fixation.tStartRefresh)
        practice.addData('fixation.stopped', fixation.tStopRefresh)
        practice.addData('left_gabor.started', left_gabor.tStartRefresh)
        practice.addData('left_gabor.stopped', left_gabor.tStopRefresh)
        practice.addData('right_gabor.started', right_gabor.tStartRefresh)
        practice.addData('right_gabor.stopped', right_gabor.tStopRefresh)
        
        # ------Prepare to start Routine "distractor"-------
        continueRoutine = True
        routineTimer.add(2.000000)
        # update component parameters for each repeat
        left_distractor_prac.setOri(left_distractor_ori)
        right_distractor_prac.setOri(right_distractor_ori)
        # keep track of which components have finished
        distractorComponents = [fixation2, left_distractor_prac, right_distractor_prac]
        for thisComponent in distractorComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        distractorClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "distractor"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = distractorClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=distractorClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fixation2* updates
            if fixation2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fixation2.frameNStart = frameN  # exact frame index
                fixation2.tStart = t  # local t and not account for scr refresh
                fixation2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation2, 'tStartRefresh')  # time at next scr refresh
                fixation2.setAutoDraw(True)
            if fixation2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation2.tStartRefresh + 2-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation2.tStop = t  # not accounting for scr refresh
                    fixation2.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation2, 'tStopRefresh')  # time at next scr refresh
                    fixation2.setAutoDraw(False)
            
            # *left_distractor_prac* updates
            if left_distractor_prac.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                left_distractor_prac.frameNStart = frameN  # exact frame index
                left_distractor_prac.tStart = t  # local t and not account for scr refresh
                left_distractor_prac.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(left_distractor_prac, 'tStartRefresh')  # time at next scr refresh
                left_distractor_prac.setAutoDraw(True)
            if left_distractor_prac.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > left_distractor_prac.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    left_distractor_prac.tStop = t  # not accounting for scr refresh
                    left_distractor_prac.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(left_distractor_prac, 'tStopRefresh')  # time at next scr refresh
                    left_distractor_prac.setAutoDraw(False)
            
            # *right_distractor_prac* updates
            if right_distractor_prac.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                right_distractor_prac.frameNStart = frameN  # exact frame index
                right_distractor_prac.tStart = t  # local t and not account for scr refresh
                right_distractor_prac.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(right_distractor_prac, 'tStartRefresh')  # time at next scr refresh
                right_distractor_prac.setAutoDraw(True)
            if right_distractor_prac.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > right_distractor_prac.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    right_distractor_prac.tStop = t  # not accounting for scr refresh
                    right_distractor_prac.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(right_distractor_prac, 'tStopRefresh')  # time at next scr refresh
                    right_distractor_prac.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in distractorComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "distractor"-------
        for thisComponent in distractorComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        practice.addData('fixation2.started', fixation2.tStartRefresh)
        practice.addData('fixation2.stopped', fixation2.tStopRefresh)
        practice.addData('left_distractor_prac.started', left_distractor_prac.tStartRefresh)
        practice.addData('left_distractor_prac.stopped', left_distractor_prac.tStopRefresh)
        practice.addData('right_distractor_prac.started', right_distractor_prac.tStartRefresh)
        practice.addData('right_distractor_prac.stopped', right_distractor_prac.tStopRefresh)
        
        # ------Prepare to start Routine "cue"-------
        continueRoutine = True
        routineTimer.add(1.600000)
        # update component parameters for each repeat
        if cue == 'neutral':
            cue_text.setText('#')
        elif cue == 'right':
            cue_text.setText('>')
        elif cue == 'left':
            cue_text.setText('<')
        else:
            print('cue not found')
            
        # keep track of which components have finished
        cueComponents = [cue_text, fixation3]
        for thisComponent in cueComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        cueClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "cue"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = cueClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=cueClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *cue_text* updates
            if cue_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cue_text.frameNStart = frameN  # exact frame index
                cue_text.tStart = t  # local t and not account for scr refresh
                cue_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cue_text, 'tStartRefresh')  # time at next scr refresh
                cue_text.setAutoDraw(True)
            if cue_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cue_text.tStartRefresh + 0.2-frameTolerance:
                    # keep track of stop time/frame for later
                    cue_text.tStop = t  # not accounting for scr refresh
                    cue_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(cue_text, 'tStopRefresh')  # time at next scr refresh
                    cue_text.setAutoDraw(False)
            
            # *fixation3* updates
            if fixation3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                fixation3.frameNStart = frameN  # exact frame index
                fixation3.tStart = t  # local t and not account for scr refresh
                fixation3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fixation3, 'tStartRefresh')  # time at next scr refresh
                fixation3.setAutoDraw(True)
            if fixation3.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fixation3.tStartRefresh + 1.6-frameTolerance:
                    # keep track of stop time/frame for later
                    fixation3.tStop = t  # not accounting for scr refresh
                    fixation3.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(fixation3, 'tStopRefresh')  # time at next scr refresh
                    fixation3.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in cueComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "cue"-------
        for thisComponent in cueComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        practice.addData('cue_text.started', cue_text.tStartRefresh)
        practice.addData('cue_text.stopped', cue_text.tStopRefresh)
        practice.addData('fixation3.started', fixation3.tStartRefresh)
        practice.addData('fixation3.stopped', fixation3.tStopRefresh)
        
        # ------Prepare to start Routine "response"-------
        continueRoutine = True
        # update component parameters for each repeat
        probe.setPos((0, 0))
        win.mouseVisible = True
        #port.write(bytes([probe_trig]))
        start_time = globalClock.getTime()
        drag_in_process = False 
        if cue == 'neutral':
            if probe_x > 0:
                cue_resp.setText('>')
            elif probe_x < 0:
                cue_resp.setText('<')
        elif cue == 'right' or cue =='left':
            cue_resp.setText('#')
        else:
            print('cue not found')
        # setup some python lists for storing info about the mouse
        mouse.x = []
        mouse.y = []
        mouse.leftButton = []
        mouse.midButton = []
        mouse.rightButton = []
        mouse.time = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        responseComponents = [cue_resp, probe, mouse]
        for thisComponent in responseComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        responseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "response"-------
        while continueRoutine:
            # get current time
            t = responseClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=responseClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *cue_resp* updates
            if cue_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cue_resp.frameNStart = frameN  # exact frame index
                cue_resp.tStart = t  # local t and not account for scr refresh
                cue_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cue_resp, 'tStartRefresh')  # time at next scr refresh
                cue_resp.setAutoDraw(True)
            
            # *probe* updates
            if probe.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                probe.frameNStart = frameN  # exact frame index
                probe.tStart = t  # local t and not account for scr refresh
                probe.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(probe, 'tStartRefresh')  # time at next scr refresh
                probe.setAutoDraw(True)
            if probe.status == STARTED:  # only update if drawing
                probe.setOri(probe_ori, log=False)
            try:
                mouse_pos = mouse.getPos()
                angle = get_angle(mouse_pos, probe.pos)
                probe.ori = angle
            except Exception as e:
                print('Error has occured.')
                print(e)
            
            #if probe_resp.keys=='space':
                #port.write(bytes([subResp_trig]))
            if mouse.getPressed()[0]:
                #port.write(bytes([subResp_trig]))
                continueRoutine=False
            
            if globalClock.getTime()-start_time >= 5:
                continueRoutine=False
            # *mouse* updates
            if mouse.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse.frameNStart = frameN  # exact frame index
                mouse.tStart = t  # local t and not account for scr refresh
                mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
                mouse.status = STARTED
                mouse.mouseClock.reset()
                prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
            if mouse.status == STARTED:  # only update if started and not finished!
                buttons = mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        x, y = mouse.getPos()
                        mouse.x.append(x)
                        mouse.y.append(y)
                        buttons = mouse.getPressed()
                        mouse.leftButton.append(buttons[0])
                        mouse.midButton.append(buttons[1])
                        mouse.rightButton.append(buttons[2])
                        mouse.time.append(mouse.mouseClock.getTime())
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in responseComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "response"-------
        for thisComponent in responseComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        practice.addData('cue_resp.started', cue_resp.tStartRefresh)
        practice.addData('cue_resp.stopped', cue_resp.tStopRefresh)
        practice.addData('probe.started', probe.tStartRefresh)
        practice.addData('probe.stopped', probe.tStopRefresh)
        ##if not probe_resp.keys:
            ##port.write(bytes([subNonResp_trig]))
        #if not mouse.getPressed()[0]:
            #port.write(bytes([subNonResp_trig]))
        
        if probe.ori > 180:
            probe.ori -= 180
        thisExp.addData('response_ori', probe.ori)
        # store data for practice (TrialHandler)
        practice.addData('mouse.x', mouse.x)
        practice.addData('mouse.y', mouse.y)
        practice.addData('mouse.leftButton', mouse.leftButton)
        practice.addData('mouse.midButton', mouse.midButton)
        practice.addData('mouse.rightButton', mouse.rightButton)
        practice.addData('mouse.time', mouse.time)
        practice.addData('mouse.started', mouse.tStartRefresh)
        practice.addData('mouse.stopped', mouse.tStopRefresh)
        # the Routine "response" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "feedback"-------
        continueRoutine = True
        routineTimer.add(1.500000)
        # update component parameters for each repeat
        #local version the positive is clockwise, negative is counterclockwise
        #but online version positive is counterclockwise, negative is clockwise
        #change subject's response to the local version (positive=clockwise)
        #response_ori = (360-probe.ori)%180 don't need this line when running local version
        response_ori=probe.ori
        #calculate the degrees_off, need to convert the "correct_response" to the local version as well
        degrees_off = abs(response_ori % 180 - correct_response % 180)
        if degrees_off > 90:
            degrees_off=180-degrees_off
        if not mouse.getPressed()[0]:
        #if probe_resp.keys is None:
            feedback_text.setText(f'Oops, you missed the response. Please respond within 5 seconds.')
        elif round(degrees_off) <= 20:
            corr_number += 1
            feedback_text.setText(f'You did a great job on that!')
        else:
            feedback_text.setText(f'You were off a few degrees. You can do better next time.')
        # keep track of which components have finished
        feedbackComponents = [feedback_text]
        for thisComponent in feedbackComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "feedback"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = feedbackClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=feedbackClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *feedback_text* updates
            if feedback_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                feedback_text.frameNStart = frameN  # exact frame index
                feedback_text.tStart = t  # local t and not account for scr refresh
                feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(feedback_text, 'tStartRefresh')  # time at next scr refresh
                feedback_text.setAutoDraw(True)
            if feedback_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > feedback_text.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    feedback_text.tStop = t  # not accounting for scr refresh
                    feedback_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(feedback_text, 'tStopRefresh')  # time at next scr refresh
                    feedback_text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in feedbackComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "feedback"-------
        for thisComponent in feedbackComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "ITI"-------
        continueRoutine = True
        routineTimer.add(0.500000)
        # update component parameters for each repeat
        # keep track of which components have finished
        ITIComponents = [buffer]
        for thisComponent in ITIComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        ITIClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "ITI"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = ITIClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=ITIClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *buffer* updates
            if buffer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                buffer.frameNStart = frameN  # exact frame index
                buffer.tStart = t  # local t and not account for scr refresh
                buffer.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(buffer, 'tStartRefresh')  # time at next scr refresh
                buffer.setAutoDraw(True)
            if buffer.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > buffer.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    buffer.tStop = t  # not accounting for scr refresh
                    buffer.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(buffer, 'tStopRefresh')  # time at next scr refresh
                    buffer.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in ITIComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "ITI"-------
        for thisComponent in ITIComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        practice.addData('buffer.started', buffer.tStartRefresh)
        practice.addData('buffer.stopped', buffer.tStopRefresh)
        thisExp.nextEntry()
        
    # completed 1 repeats of 'practice'
    
    
    # ------Prepare to start Routine "end_training_feedback"-------
    continueRoutine = True
    # update component parameters for each repeat
    #the total number of practice is 13, 10 times correct number is fine to pass.
    total_acc=round(corr_number/practice.nTotal * 100)
    if corr_number>=9:
        end_feedback_text.setText('Your total accuracy in practice session is above 70%.\nYou can enter to the main session.\nPress space button to continue.')
        practice_loop.finished = True
    else:
        corr_number = 0
        fail_number+=1
        if fail_number==10:
            end_feedback_text.setText("You failed too many times. Thanks for your interest! Please email 'P5DONE' to researcher and get 0.5 credit.\n Press space to exit.")
        else:
            end_feedback_text.setText('Your total accuracy in practice session is '+str(total_acc)+'%.\nPlease practice one more time.\nPress space button to repeat the practice session.')
            
    key_resp_4.keys = []
    key_resp_4.rt = []
    _key_resp_4_allKeys = []
    # keep track of which components have finished
    end_training_feedbackComponents = [end_feedback_text, key_resp_4]
    for thisComponent in end_training_feedbackComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    end_training_feedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "end_training_feedback"-------
    while continueRoutine:
        # get current time
        t = end_training_feedbackClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=end_training_feedbackClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *end_feedback_text* updates
        if end_feedback_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            end_feedback_text.frameNStart = frameN  # exact frame index
            end_feedback_text.tStart = t  # local t and not account for scr refresh
            end_feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(end_feedback_text, 'tStartRefresh')  # time at next scr refresh
            end_feedback_text.setAutoDraw(True)
        
        # *key_resp_4* updates
        waitOnFlip = False
        if key_resp_4.status == NOT_STARTED and tThisFlip >= 2-frameTolerance:
            # keep track of start time/frame for later
            key_resp_4.frameNStart = frameN  # exact frame index
            key_resp_4.tStart = t  # local t and not account for scr refresh
            key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
            key_resp_4.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_4.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_4.getKeys(keyList=['space', 'p'], waitRelease=False)
            _key_resp_4_allKeys.extend(theseKeys)
            if len(_key_resp_4_allKeys):
                key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
                key_resp_4.rt = _key_resp_4_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in end_training_feedbackComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "end_training_feedback"-------
    for thisComponent in end_training_feedbackComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    if fail_number==10:
        core.quit()
    if key_resp_4.keys[0]=='p':
        practice_loop.finished = True
    # the Routine "end_training_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
# completed 10 repeats of 'practice_loop'


# ------Prepare to start Routine "main_session"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
main_sessionComponents = [begin_text, key_resp_3]
for thisComponent in main_sessionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
main_sessionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "main_session"-------
while continueRoutine:
    # get current time
    t = main_sessionClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=main_sessionClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *begin_text* updates
    if begin_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        begin_text.frameNStart = frameN  # exact frame index
        begin_text.tStart = t  # local t and not account for scr refresh
        begin_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(begin_text, 'tStartRefresh')  # time at next scr refresh
        begin_text.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in main_sessionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "main_session"-------
for thisComponent in main_sessionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('begin_text.started', begin_text.tStartRefresh)
thisExp.addData('begin_text.stopped', begin_text.tStopRefresh)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.addData('key_resp_3.started', key_resp_3.tStartRefresh)
thisExp.addData('key_resp_3.stopped', key_resp_3.tStopRefresh)
thisExp.nextEntry()
# the Routine "main_session" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions(conditions_csv),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "stimulus_main"-------
    continueRoutine = True
    routineTimer.add(1.400000)
    # update component parameters for each repeat
    left_target.setOri(left_gabor_ori)
    right_target.setOri(right_gabor_ori)
    win.mouseVisible = False
    #port.write(bytes([target_trig]))
    # keep track of which components have finished
    stimulus_mainComponents = [fix_cross, left_target, right_target]
    for thisComponent in stimulus_mainComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    stimulus_mainClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "stimulus_main"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = stimulus_mainClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=stimulus_mainClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fix_cross* updates
        if fix_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix_cross.frameNStart = frameN  # exact frame index
            fix_cross.tStart = t  # local t and not account for scr refresh
            fix_cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_cross, 'tStartRefresh')  # time at next scr refresh
            fix_cross.setAutoDraw(True)
        if fix_cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fix_cross.tStartRefresh + 1.4-frameTolerance:
                # keep track of stop time/frame for later
                fix_cross.tStop = t  # not accounting for scr refresh
                fix_cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fix_cross, 'tStopRefresh')  # time at next scr refresh
                fix_cross.setAutoDraw(False)
        
        # *left_target* updates
        if left_target.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            left_target.frameNStart = frameN  # exact frame index
            left_target.tStart = t  # local t and not account for scr refresh
            left_target.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(left_target, 'tStartRefresh')  # time at next scr refresh
            left_target.setAutoDraw(True)
        if left_target.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > left_target.tStartRefresh + 0.75-frameTolerance:
                # keep track of stop time/frame for later
                left_target.tStop = t  # not accounting for scr refresh
                left_target.frameNStop = frameN  # exact frame index
                win.timeOnFlip(left_target, 'tStopRefresh')  # time at next scr refresh
                left_target.setAutoDraw(False)
        
        # *right_target* updates
        if right_target.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            right_target.frameNStart = frameN  # exact frame index
            right_target.tStart = t  # local t and not account for scr refresh
            right_target.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right_target, 'tStartRefresh')  # time at next scr refresh
            right_target.setAutoDraw(True)
        if right_target.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > right_target.tStartRefresh + 0.75-frameTolerance:
                # keep track of stop time/frame for later
                right_target.tStop = t  # not accounting for scr refresh
                right_target.frameNStop = frameN  # exact frame index
                win.timeOnFlip(right_target, 'tStopRefresh')  # time at next scr refresh
                right_target.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in stimulus_mainComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "stimulus_main"-------
    for thisComponent in stimulus_mainComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fix_cross.started', fix_cross.tStartRefresh)
    trials.addData('fix_cross.stopped', fix_cross.tStopRefresh)
    trials.addData('left_target.started', left_target.tStartRefresh)
    trials.addData('left_target.stopped', left_target.tStopRefresh)
    trials.addData('right_target.started', right_target.tStartRefresh)
    trials.addData('right_target.stopped', right_target.tStopRefresh)
    
    # ------Prepare to start Routine "distractor_main"-------
    continueRoutine = True
    routineTimer.add(1.400000)
    # update component parameters for each repeat
    left_distractor_main.setOri(left_distractor_ori)
    right_distractor_main.setOri(right_distractor_ori)
    #port.write(bytes([distractor_trig]))
    # keep track of which components have finished
    distractor_mainComponents = [fix_cross2, left_distractor_main, right_distractor_main]
    for thisComponent in distractor_mainComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    distractor_mainClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "distractor_main"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = distractor_mainClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=distractor_mainClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *fix_cross2* updates
        if fix_cross2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            fix_cross2.frameNStart = frameN  # exact frame index
            fix_cross2.tStart = t  # local t and not account for scr refresh
            fix_cross2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_cross2, 'tStartRefresh')  # time at next scr refresh
            fix_cross2.setAutoDraw(True)
        if fix_cross2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fix_cross2.tStartRefresh + 1.4-frameTolerance:
                # keep track of stop time/frame for later
                fix_cross2.tStop = t  # not accounting for scr refresh
                fix_cross2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fix_cross2, 'tStopRefresh')  # time at next scr refresh
                fix_cross2.setAutoDraw(False)
        
        # *left_distractor_main* updates
        if left_distractor_main.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            left_distractor_main.frameNStart = frameN  # exact frame index
            left_distractor_main.tStart = t  # local t and not account for scr refresh
            left_distractor_main.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(left_distractor_main, 'tStartRefresh')  # time at next scr refresh
            left_distractor_main.setAutoDraw(True)
        if left_distractor_main.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > left_distractor_main.tStartRefresh + 0.75-frameTolerance:
                # keep track of stop time/frame for later
                left_distractor_main.tStop = t  # not accounting for scr refresh
                left_distractor_main.frameNStop = frameN  # exact frame index
                win.timeOnFlip(left_distractor_main, 'tStopRefresh')  # time at next scr refresh
                left_distractor_main.setAutoDraw(False)
        
        # *right_distractor_main* updates
        if right_distractor_main.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            right_distractor_main.frameNStart = frameN  # exact frame index
            right_distractor_main.tStart = t  # local t and not account for scr refresh
            right_distractor_main.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right_distractor_main, 'tStartRefresh')  # time at next scr refresh
            right_distractor_main.setAutoDraw(True)
        if right_distractor_main.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > right_distractor_main.tStartRefresh + 0.75-frameTolerance:
                # keep track of stop time/frame for later
                right_distractor_main.tStop = t  # not accounting for scr refresh
                right_distractor_main.frameNStop = frameN  # exact frame index
                win.timeOnFlip(right_distractor_main, 'tStopRefresh')  # time at next scr refresh
                right_distractor_main.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in distractor_mainComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "distractor_main"-------
    for thisComponent in distractor_mainComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('fix_cross2.started', fix_cross2.tStartRefresh)
    trials.addData('fix_cross2.stopped', fix_cross2.tStopRefresh)
    trials.addData('left_distractor_main.started', left_distractor_main.tStartRefresh)
    trials.addData('left_distractor_main.stopped', left_distractor_main.tStopRefresh)
    trials.addData('right_distractor_main.started', right_distractor_main.tStartRefresh)
    trials.addData('right_distractor_main.stopped', right_distractor_main.tStopRefresh)
    
    # ------Prepare to start Routine "cue_main"-------
    continueRoutine = True
    routineTimer.add(1.600000)
    # update component parameters for each repeat
    if cue == 'neutral':
        main_cue.setText('#')
    elif cue == 'right':
        main_cue.setText('>')
    elif cue == 'left':
        main_cue.setText('<')
    else:
        print('cue not found')
    
    #cue_trig=cuetrigDict[cue]
    #port.write(bytes([cue_trig]))
    # keep track of which components have finished
    cue_mainComponents = [main_cue, fix_cross3]
    for thisComponent in cue_mainComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    cue_mainClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "cue_main"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = cue_mainClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=cue_mainClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *main_cue* updates
        if main_cue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            main_cue.frameNStart = frameN  # exact frame index
            main_cue.tStart = t  # local t and not account for scr refresh
            main_cue.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(main_cue, 'tStartRefresh')  # time at next scr refresh
            main_cue.setAutoDraw(True)
        if main_cue.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > main_cue.tStartRefresh + 0.2-frameTolerance:
                # keep track of stop time/frame for later
                main_cue.tStop = t  # not accounting for scr refresh
                main_cue.frameNStop = frameN  # exact frame index
                win.timeOnFlip(main_cue, 'tStopRefresh')  # time at next scr refresh
                main_cue.setAutoDraw(False)
        
        # *fix_cross3* updates
        if fix_cross3.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            fix_cross3.frameNStart = frameN  # exact frame index
            fix_cross3.tStart = t  # local t and not account for scr refresh
            fix_cross3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(fix_cross3, 'tStartRefresh')  # time at next scr refresh
            fix_cross3.setAutoDraw(True)
        if fix_cross3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > fix_cross3.tStartRefresh + 1.6-frameTolerance:
                # keep track of stop time/frame for later
                fix_cross3.tStop = t  # not accounting for scr refresh
                fix_cross3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(fix_cross3, 'tStopRefresh')  # time at next scr refresh
                fix_cross3.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in cue_mainComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "cue_main"-------
    for thisComponent in cue_mainComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('main_cue.started', main_cue.tStartRefresh)
    trials.addData('main_cue.stopped', main_cue.tStopRefresh)
    trials.addData('fix_cross3.started', fix_cross3.tStartRefresh)
    trials.addData('fix_cross3.stopped', fix_cross3.tStopRefresh)
    
    # ------Prepare to start Routine "response"-------
    continueRoutine = True
    # update component parameters for each repeat
    probe.setPos((0, 0))
    win.mouseVisible = True
    #port.write(bytes([probe_trig]))
    start_time = globalClock.getTime()
    drag_in_process = False 
    if cue == 'neutral':
        if probe_x > 0:
            cue_resp.setText('>')
        elif probe_x < 0:
            cue_resp.setText('<')
    elif cue == 'right' or cue =='left':
        cue_resp.setText('#')
    else:
        print('cue not found')
    # setup some python lists for storing info about the mouse
    mouse.x = []
    mouse.y = []
    mouse.leftButton = []
    mouse.midButton = []
    mouse.rightButton = []
    mouse.time = []
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    responseComponents = [cue_resp, probe, mouse]
    for thisComponent in responseComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    responseClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "response"-------
    while continueRoutine:
        # get current time
        t = responseClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=responseClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *cue_resp* updates
        if cue_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            cue_resp.frameNStart = frameN  # exact frame index
            cue_resp.tStart = t  # local t and not account for scr refresh
            cue_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cue_resp, 'tStartRefresh')  # time at next scr refresh
            cue_resp.setAutoDraw(True)
        
        # *probe* updates
        if probe.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            probe.frameNStart = frameN  # exact frame index
            probe.tStart = t  # local t and not account for scr refresh
            probe.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(probe, 'tStartRefresh')  # time at next scr refresh
            probe.setAutoDraw(True)
        if probe.status == STARTED:  # only update if drawing
            probe.setOri(probe_ori, log=False)
        try:
            mouse_pos = mouse.getPos()
            angle = get_angle(mouse_pos, probe.pos)
            probe.ori = angle
        except Exception as e:
            print('Error has occured.')
            print(e)
        
        #if probe_resp.keys=='space':
            #port.write(bytes([subResp_trig]))
        if mouse.getPressed()[0]:
            #port.write(bytes([subResp_trig]))
            continueRoutine=False
        
        if globalClock.getTime()-start_time >= 5:
            continueRoutine=False
        # *mouse* updates
        if mouse.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse.frameNStart = frameN  # exact frame index
            mouse.tStart = t  # local t and not account for scr refresh
            mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
            mouse.status = STARTED
            mouse.mouseClock.reset()
            prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
        if mouse.status == STARTED:  # only update if started and not finished!
            buttons = mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    x, y = mouse.getPos()
                    mouse.x.append(x)
                    mouse.y.append(y)
                    buttons = mouse.getPressed()
                    mouse.leftButton.append(buttons[0])
                    mouse.midButton.append(buttons[1])
                    mouse.rightButton.append(buttons[2])
                    mouse.time.append(mouse.mouseClock.getTime())
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in responseComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "response"-------
    for thisComponent in responseComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('cue_resp.started', cue_resp.tStartRefresh)
    trials.addData('cue_resp.stopped', cue_resp.tStopRefresh)
    trials.addData('probe.started', probe.tStartRefresh)
    trials.addData('probe.stopped', probe.tStopRefresh)
    ##if not probe_resp.keys:
        ##port.write(bytes([subNonResp_trig]))
    #if not mouse.getPressed()[0]:
        #port.write(bytes([subNonResp_trig]))
    
    if probe.ori > 180:
        probe.ori -= 180
    thisExp.addData('response_ori', probe.ori)
    # store data for trials (TrialHandler)
    trials.addData('mouse.x', mouse.x)
    trials.addData('mouse.y', mouse.y)
    trials.addData('mouse.leftButton', mouse.leftButton)
    trials.addData('mouse.midButton', mouse.midButton)
    trials.addData('mouse.rightButton', mouse.rightButton)
    trials.addData('mouse.time', mouse.time)
    trials.addData('mouse.started', mouse.tStartRefresh)
    trials.addData('mouse.stopped', mouse.tStopRefresh)
    # the Routine "response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "ITI"-------
    continueRoutine = True
    routineTimer.add(0.500000)
    # update component parameters for each repeat
    # keep track of which components have finished
    ITIComponents = [buffer]
    for thisComponent in ITIComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    ITIClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "ITI"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = ITIClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=ITIClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *buffer* updates
        if buffer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            buffer.frameNStart = frameN  # exact frame index
            buffer.tStart = t  # local t and not account for scr refresh
            buffer.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(buffer, 'tStartRefresh')  # time at next scr refresh
            buffer.setAutoDraw(True)
        if buffer.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > buffer.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                buffer.tStop = t  # not accounting for scr refresh
                buffer.frameNStop = frameN  # exact frame index
                win.timeOnFlip(buffer, 'tStopRefresh')  # time at next scr refresh
                buffer.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ITIComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "ITI"-------
    for thisComponent in ITIComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('buffer.started', buffer.tStartRefresh)
    trials.addData('buffer.stopped', buffer.tStopRefresh)
    
    # ------Prepare to start Routine "rest"-------
    continueRoutine = True
    routineTimer.add(30.000000)
    # update component parameters for each repeat
    #port.write([endofBlock_trig])
    #port.write(stopSaveflag)
    # keep track of which components have finished
    restComponents = [take_break, break_text]
    for thisComponent in restComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    restClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "rest"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = restClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=restClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        if (trials.thisTrialN+1) % 40 == 0 and trials.thisTrialN > 0 and trials.thisTrialN != 319:
            continueRoutine = True
        else:
            continueRoutine = False
        
        # *take_break* updates
        if take_break.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            take_break.frameNStart = frameN  # exact frame index
            take_break.tStart = t  # local t and not account for scr refresh
            take_break.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(take_break, 'tStartRefresh')  # time at next scr refresh
            take_break.setAutoDraw(True)
        if take_break.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > take_break.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                take_break.tStop = t  # not accounting for scr refresh
                take_break.frameNStop = frameN  # exact frame index
                win.timeOnFlip(take_break, 'tStopRefresh')  # time at next scr refresh
                take_break.setAutoDraw(False)
        if take_break.status == STARTED:  # only update if drawing
            take_break.setText(round(30-t), log=False)
        
        # *break_text* updates
        if break_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            break_text.frameNStart = frameN  # exact frame index
            break_text.tStart = t  # local t and not account for scr refresh
            break_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(break_text, 'tStartRefresh')  # time at next scr refresh
            break_text.setAutoDraw(True)
        if break_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > break_text.tStartRefresh + 30-frameTolerance:
                # keep track of stop time/frame for later
                break_text.tStop = t  # not accounting for scr refresh
                break_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(break_text, 'tStopRefresh')  # time at next scr refresh
                break_text.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in restComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "rest"-------
    for thisComponent in restComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    #port.write(startSaveflag)
    trials.addData('take_break.started', take_break.tStartRefresh)
    trials.addData('take_break.stopped', take_break.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# ------Prepare to start Routine "bye"-------
continueRoutine = True
routineTimer.add(5.000000)
# update component parameters for each repeat
# keep track of which components have finished
byeComponents = [ending]
for thisComponent in byeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
byeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "bye"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = byeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=byeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *ending* updates
    if ending.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ending.frameNStart = frameN  # exact frame index
        ending.tStart = t  # local t and not account for scr refresh
        ending.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ending, 'tStartRefresh')  # time at next scr refresh
        ending.setAutoDraw(True)
    if ending.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > ending.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            ending.tStop = t  # not accounting for scr refresh
            ending.frameNStop = frameN  # exact frame index
            win.timeOnFlip(ending, 'tStopRefresh')  # time at next scr refresh
            ending.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in byeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "bye"-------
for thisComponent in byeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
port.close()
#port.write(stopSaveflag)
#port.close()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
