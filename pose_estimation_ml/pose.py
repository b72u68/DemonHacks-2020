import cv2
import matplotlib.pyplot as plt
import argparse

model_net=cv2.dnn.readNetFromTensorflow("./graph_opt.pb")

BODY_PARTS = { "Nose": 0, "Neck": 1, "RShoulder": 2, "RElbow": 3, "RWrist": 4,
                "LShoulder": 5, "LElbow": 6, "LWrist": 7, "RHip": 8, "RKnee": 9,
                "RAnkle": 10, "LHip": 11, "LKnee": 12, "LAnkle": 13, "REye": 14,
                "LEye": 15, "REar": 16, "LEar": 17, "Background": 18 }

POSE_PAIRS = [ ["Neck", "RShoulder"], ["Neck", "LShoulder"], ["RShoulder", "RElbow"],
                ["RElbow", "RWrist"], ["LShoulder", "LElbow"], ["LElbow", "LWrist"],
                   ["RShoulder", "RHip"], ["RHip", "RKnee"], ["RKnee", "RAnkle"], ["LShoulder", "LHip"],
                   ["LHip", "LKnee"], ["LKnee", "LAnkle"], ["Neck", "Nose"], ["Nose", "REye"],
                   ["REye", "REar"], ["Nose", "LEye"], ["LEye", "LEar"],["LHip","RHip"] ]


inWidth=368
inHeight=368
thr=0.2

# cap=cv2.VideoCapture("1-Minute Yoga- Easy Abs!.mp4")
# cap.set(cv2.CAP_PROP_FPS,100)
# cap.set(3,800)
# cap.set(4,800)
# while(cv2.waitKey(1)<1):
#     ret,frame=cap.read()
#     print(ret)
#     if(ret==False):
#         continue
#     frameWidth = frame.shape[1]
#     frameHeight = frame.shape[0]
#     model_net.setInput(cv2.dnn.blobFromImage(frame,1.0,(inWidth,inHeight),(127.5,127.5,127.5),swapRB=False,crop=False))
#     out=model_net.forward()
   
#     out=out[0:,:19,:,:]
#     print(out.shape)
    
#     assert(len(BODY_PARTS) <= out.shape[1])

#     points = []
#     for i in range(len(BODY_PARTS)):
#         # Slice heatmap of corresponding body's part.
#         heatMap = out[0, i, :, :]

#         # Originally, we try to find all the local maximums. To simplify a sample
#         # we just find a global one. However only a single pose at the same time
#         # could be detected this way.
#         _, conf, _, point = cv2.minMaxLoc(heatMap)
#         x = (frameWidth * point[0]) / out.shape[3]
#         y = (frameHeight * point[1]) / out.shape[2]
        
#         # Add a point if it's confidence is higher than threshold.
#         points.append((int(x), int(y)) if conf > thr else None)
#         print(conf,thr)
#     print(points)
#     for pair in POSE_PAIRS:
#         partFrom = pair[0]
#         partTo = pair[1]
#         assert(partFrom in BODY_PARTS)
#         assert(partTo in BODY_PARTS)

#         idFrom = BODY_PARTS[partFrom]
#         idTo = BODY_PARTS[partTo]

#         if points[idFrom] and points[idTo]:
#             cv2.line(frame, points[idFrom], points[idTo], (0, 255, 0), 3)
#             cv2.ellipse(frame, points[idFrom], (3, 3), 0, 0, 360, (0, 0, 255), cv2.FILLED)
#             cv2.ellipse(frame, points[idTo], (3, 3), 0, 0, 360, (0, 0, 255), cv2.FILLED)
# #     plt.imshow(cv2.cvtColor(frame,cv2.COLOR_BGR2RGB))

#     cv2.imshow("frame",frame)
#     k = cv2.waitKey(1) & 0xff
#     if k == 27: 
#         break
# cap.release() 

# cv2.destroyAllWindows() 


img=cv2.imread("pose14.png")

print(img.shape)
def pose_estimation(frame):
    frameWidth = img.shape[1]
    frameHeight = img.shape[0]
    model_net.setInput(cv2.dnn.blobFromImage(frame,1.0,(inWidth,inHeight),(127.5,127.5,127.5),swapRB=False,crop=False))
    out=model_net.forward()
   
    out=out[0:,:19,:,:]
    print(out.shape)
    
    assert(len(BODY_PARTS) <= out.shape[1])

    points = []
    for i in range(len(BODY_PARTS)):
        # Slice heatmap of corresponding body's part.
        heatMap = out[0, i, :, :]

        # Originally, we try to find all the local maximums. To simplify a sample
        # we just find a global one. However only a single pose at the same time
        # could be detected this way.
        _, conf, _, point = cv2.minMaxLoc(heatMap)
        x = (frameWidth * point[0]) / out.shape[3]
        y = (frameHeight * point[1]) / out.shape[2]
        
        # Add a point if it's confidence is higher than threshold.
        points.append((int(x), int(y)) if conf > thr else None)
    print(points)
    for pair in POSE_PAIRS:
        partFrom = pair[0]
        partTo = pair[1]
        assert(partFrom in BODY_PARTS)
        assert(partTo in BODY_PARTS)

        idFrom = BODY_PARTS[partFrom]
        idTo = BODY_PARTS[partTo]

        if points[idFrom] and points[idTo]:
            cv2.line(frame, points[idFrom], points[idTo], (0, 255, 0), 3)
            cv2.ellipse(frame, points[idFrom], (3, 3), 0, 0, 360, (0, 0, 255), cv2.FILLED)
            cv2.ellipse(frame, points[idTo], (3, 3), 0, 0, 360, (0, 0, 255), cv2.FILLED)
   
    return frame
cv2.imshow("old",img)
frame=pose_estimation(img)
while(True):
    cv2.imshow("new",frame)
    k = cv2.waitKey(1) & 0xff
    if k == 27: 
        break