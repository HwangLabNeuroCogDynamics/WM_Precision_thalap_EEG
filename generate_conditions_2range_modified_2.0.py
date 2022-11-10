import pandas as pd
import random
import numpy as np

def generate_orientations(num_trails,trial,probe_x):
    # set orientations of gabors to a random int between 0 and 180, ensure none
    # are the same
    orientations = [0, 0, 0, 0]

    #adjust the similarity between the same side distractor and target

    if probe_x > 0:
        a=1
    elif probe_x < 0:
        a=0
    #five ranges * two directions (clockwise, anticlockwise)
    # first five trials are clockwise
    if trial+1 <= num_trails/2:
        while np.unique(orientations).size != len(orientations) or abs(orientations[3]%180-orientations[2]%180)<20:
            orientations[0]=random.randint(0,179)
            #make sure the difference between two gabors is larger than 20 degrees
            orientations[1]=(random.randint(orientations[0]+20,orientations[0]-20+180))%180
            # the output of this formula will be falling in 0~360, so mod 180, then it will be in 0~180

            #adjust the range of similarity
            sim_range1=random.randint(20,45)
            #this is to make another distractor distal to the unprobed target
            sim_range2=random.randint(20,45)
            if a==0:
                #if clockwise, then gabor plus the random value within similarity range
                orientations[2]=(orientations[0]+sim_range1)
                #the output of this distractor will fall in to -180,360, do not mod here.
                # orientations[3]=(random.randint(orientations[0]+20,orientations[0]-20+180))%180
                orientations[3]=(orientations[1]+sim_range2)
                #if the diatance between two diatractor is too close, then reassgin the 
                # while abs(orientations[3]%180-orientations[2]%180)<20:
                #     sim_range2=random.randint((sim_step*1+1),(sim_step*2))
                #     orientations[3]=(orientations[1]+sim_range2)
            elif a==1:
                orientations[3]=(orientations[1]+sim_range1)
                orientations[2]=(orientations[0]+sim_range2)
                # while abs(orientations[3]%180-orientations[2]%180)<=20:
                #     sim_range2=random.randint((sim_step*1+1),(sim_step*2))
                #     orientations[2]=(orientations[0]+sim_range2)
        similarity='[25,45] degrees'
        clockwise='clockwise'

    if trial+1 > num_trails/2:
        while np.unique(orientations).size != len(orientations) or abs(orientations[3]%180-orientations[2]%180)<20:
            orientations[0]=random.randint(0,179)
            orientations[1]=(random.randint(orientations[0]+20,orientations[0]-20+180))%180
            #orientations[1]=(orientations[0]+gabor_diff)%180
            sim_range1=-1*random.randint(20,45)
            sim_range2=-1*random.randint(20,45)
            if a==0:
                orientations[2]=(orientations[0]+sim_range1)
                # orientations[3]=(random.randint(orientations[2]+20,orientations[2]-20+180))%180
                orientations[3]=(orientations[1]+sim_range2)
                # while abs(orientations[3]%180-orientations[2]%180)<=20:
                #     sim_range2=-1*random.randint((sim_step*1+1),(sim_step*2))
                #     orientations[3]=(orientations[1]+sim_range2)
            elif a==1:
                orientations[3]=(orientations[1]+sim_range1)
                # orientations[2]=(random.randint(orientations[3]+20,orientations[3]-20+180))%180
                orientations[2]=(orientations[0]+sim_range2)
                # while abs(orientations[3]%180-orientations[2]%180)<=20:
                #     sim_range2=-1*random.randint((sim_step*1+1),(sim_step*2))
                #     orientations[2]=(orientations[0]+sim_range2)
        similarity='[25,45] degrees'
        clockwise='anticlockwise'

    return orientations,similarity,clockwise,sim_range1,sim_range2

def generate_csv(filename, num_trials):
    columns = ['left_gabor_ori', 'right_gabor_ori', 'left_distractor_ori',
               'right_distractor_ori','similarity_range', 'cue', 'probe_x', 'probe_ori',
               'correct_response','rotate_direction', 'similarity','another_similarity']
    left_x = -0.4
    right_x = 0.4
    step_size = 1

    trials_df = pd.DataFrame(columns=(columns), index=range(num_trials))

    # set trial conditions
    for trial in range(num_trials):
        '''
        # set orientations of gabors to a random int between 0 and 180, ensure none
        # are the same
        orientations = [0, 0, 0, 0]

        while np.unique(orientations).size != len(orientations):
            orientations = [random.randint(0, 179)
                            for ori in orientations]
            # make sure the difference of orientation between two gabors is larger than 20 degrees
            while abs(orientations[0]-orientations[1]) <= 20:
                orientations[0] = random.randint(0, 179)
            # make two distractors more different
            while abs(orientations[2]-orientations[3]) <= 20:
                orientations[2] = random.randint(0, 179)
        '''

        # set cue and probe x position and correct response
        if trial % 2 == 0:
            cue = 'neutral'
            if trial % 4 == 0:
                probe_x = left_x
                orientations,similarity,clockwise,sim_range1,sim_range2=generate_orientations(num_trials,trial,probe_x)
                correct_response = orientations[0]
            else:
                probe_x = right_x
                orientations,similarity,clockwise,sim_range1,sim_range2=generate_orientations(num_trials,trial,probe_x)
                correct_response = orientations[1]

        elif trial % 2 == 1:
            if (trial-1) % 4 == 0:
                cue = 'left'
                probe_x = left_x
                #probe_x = 0
                orientations,similarity,clockwise,sim_range1,sim_range2=generate_orientations(num_trials,trial,probe_x)
                correct_response = orientations[0]
            else:
                cue = 'right'
                probe_x = right_x
                #probe_x = 0
                orientations,similarity,clockwise,sim_range1,sim_range2=generate_orientations(num_trials,trial,probe_x)
                correct_response = orientations[1]
        else:
            raise Exception('You broke math.')
        '''
        # set correct response
        if probe_x == left_x:
            correct_response = orientations[0]
        elif probe_x == right_x:
            correct_response = orientations[1]
        else:
            raise Exception('probe_x not valid')
        '''
        # starting response gabor should be within +- 45 degrees of correct response
        probe_ori = random.randint(
            correct_response - 45, correct_response + 45)

        # append trial row to df
        trials_df.loc[trial] = orientations + \
            [similarity, cue, probe_x, probe_ori, correct_response, clockwise, sim_range1,sim_range2]

    trials_df.to_csv(filename, index=False)


for i in range(1, 101):
    generate_csv(f'./conditions{i}.csv', 120)
    generate_csv(f'./practice{i}.csv', 13)
