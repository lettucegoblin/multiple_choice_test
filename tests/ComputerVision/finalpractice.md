# Computer Vision Final Exam Practice

**Q: According to the slide materials, what is the primary reason why recovering a 3D shape from a single 2D image is considered an ill-posed problem?**
- A) The solution is unique but difficult to calculate.
- B) The solution exists and continuously depends on the data, but it is not unique.
- C) The solution does not exist.
- D) There can be infinite 3D objects that project to the same 2D image, making the solution non-unique.

**Answer:** D
Rationale: A problem is considered well-posed if its solution exists, is unique, and continuously depends on data. Recovering a 3D shape from a single 2D image is ill-posed because multiple different 3D objects can appear identical when projected onto a 2D plane, meaning the solution is not unique.

---

**Q: Explain the difference between convolution and correlation in the context of linear filters in computer vision, and mention a key mathematical property that differentiates them according to the slides.**

**SHORT ANSWER:** In the context of linear filters, both convolution and correlation involve combining an image with a kernel. The key mathematical property differentiating them is that convolution is commutative and associative, while correlation is not commutative. This means the order of operations matters for correlation, but not for convolution when combining multiple filters. For example, convolving an image `f` with kernels `g` and `h` can be done as `f * (g * h)` or `(f * g) * h`, and the result is the same; `f * g = g * f`. However, for correlation `f ⊗ g ≠ g ⊗ f` and `f ⊗ (g ⊗ h) ≠ (f ⊗ g) ⊗ h`. This property of convolution allows for flexibility in applying filters sequentially, like first smoothing an image and then applying a derivative, or combining the smoothing and differential operators first and then applying the result to the image.

---

**Q: Which of the following computer vision tasks is categorized as a high-level task, according to the examples provided in the slides?**
- A) Editing the contrast of an image.
- B) Applying a filter to change a color image to grayscale.
- C) Creating a panoramic photo.
- D) Classifying images into categories like dogs, cats, and cars.

**Answer:** D
Rationale: High-level computer vision tasks require significant semantic information and features to distinguish between different categories or understand complex scenes. Editing contrast or changing to grayscale are low-level tasks as they involve manipulating pixel intensities. Creating a panoramic photo is a mid-level task that requires processing low-level features like corners and edges to stitch images together. Image classification, which categorizes images based on their content (like dogs, cats, persons, cars), requires high-level semantic understanding.

---

**Q: Describe the primary difference between object classification and object detection as high-level computer vision tasks, and how their evaluation metrics reflect this difference.**

**SHORT ANSWER:** Object classification typically involves determining the category of the main object within an entire image, resulting in a single class label output for the image. Object detection, on the other hand, involves identifying the presence of potentially multiple objects within an image and also locating them by drawing bounding boxes around them. The output for object detection includes both class labels *and* the coordinates and dimensions of the bounding boxes (e.g., (x1, y1, w1, h1, cat)). Evaluation metrics reflect this difference: classification uses metrics like Accuracy, Precision, Recall, Top-1 Accuracy, and Top-5 Accuracy to assess the correctness of the class prediction for the whole image or a single object. Detection uses metrics like Intersection over Union (IoU) to evaluate the accuracy of the predicted bounding box location and Mean Average Precision (mAP), which averages the Average Precision (AP) across all classes, to evaluate both the correct classification *and* localization of multiple objects.

---

**Q: Based on the study guide, which of the following is NOT considered a hyperparameter in training neural networks?**
- A) Number of Layers
- B) Filter Dimensions (e.g., 3x3)
- C) Batch Size
- D) Network Weights (w)

**Answer:** D
Rationale: The study guide lists Number of Layers, Filter Dimensions, Batch Size, Epochs, and Loss Functions as hyperparameters. Hyperparameters are settings that are set *before* training begins and control the training process and network structure. Network weights (w) and biases (b) are the parameters that the network *learns* during the training process.

---

**Q: Explain why corners are considered better than edges for feature matching in computer vision, referencing the concept of gradient.**

**SHORT ANSWER:** Edges represent areas in an image where there is a strong intensity change primarily in one direction. This means the gradient magnitude is high, but the direction of the gradient is relatively consistent along the edge. Corners, however, represent points where there are strong intensity changes in *multiple* directions. This results in high gradient responses in more than one orientation. For feature matching, points that are easily and reliably located across different images are needed. Edges can be ambiguous because a point along an edge might shift slightly without significantly changing its local appearance or gradient profile. Corners, with their distinct intensity changes in multiple directions, provide a more stable and unique "anchor point" for comparison and matching across different views or transformations of an image. The Harris corner detector, for instance, measures this local structure using gradients in the x and y directions to calculate a corner score that is high in areas with strong gradients in multiple directions.

---

**Q: What is the typical range of intensity values used for a single byte per pixel in a grayscale image, as mentioned in the slides?**
- A) 0 to 1
- B) -1 to 1
- C) 0 to 255
- D) -255 to 255

**Answer:** C
Rationale: An image can be represented as a grid (matrix) of intensity values. It is common to use one byte per value, where 0 represents black and 255 represents white.

---

**Q: Describe what the term "ill-posed problem" means in the context of computer vision, referring to Hadamard's criteria.**

**SHORT ANSWER:** According to Hadamard's definition, a well-posed problem must satisfy three specific properties: its solution must exist, its solution must be unique, and its solution must continuously depend on the data. An ill-posed problem is one that fails to satisfy one or more of these criteria. In computer vision, many tasks are inherently ill-posed. For example, recovering a 3D shape from a single 2D image is ill-posed because an infinite number of different 3D shapes can produce the exact same 2D image projection, meaning the solution is not unique. Recovering 3D shape from multiple 2D images taken from different angles, however, can be a well-posed problem if enough data is available.

---

**Q: Which evaluation metric is calculated as the mean of all Average Precisions (APs) across different object classes in object detection?**
- A) Top-1 Accuracy
- B) Recall
- C) Mean Average Precision (mAP)
- D) Intersection over Union (IoU)

**Answer:** C
Rationale: Average Precision (AP) is defined as the area under the precision-recall curve for a specific class. Mean Average Precision (mAP) is calculated as the average of these AP values across all the classes being detected. This metric provides a single number summarizing the performance of an object detector across all classes and across different recall levels. Top-1 Accuracy and Recall are typically used for classification tasks, although Recall is also a component of the AP calculation. IoU measures the overlap between a predicted bounding box and a ground-truth bounding box.

---

**Q: Explain the purpose of Non-Maximum Suppression (NMS) in object detection workflows like YOLO.**

**SHORT ANSWER:** Object detection models, particularly those like YOLO that use a grid-based approach or generate multiple potential bounding boxes, often predict multiple overlapping bounding boxes for the same object. Non-Maximum Suppression (NMS) is a post-processing technique used to refine these predictions and eliminate redundant or duplicate detections. The process typically involves iterating through the predicted bounding boxes, usually sorted by their confidence score. For the box with the highest confidence, it is kept, and then all other boxes that significantly overlap with it (based on a predefined IoU threshold) are suppressed (removed). This process is repeated with the next highest confidence box among the remaining ones until all boxes have been processed, leaving only the most confident and non-overlapping detections for each object. This helps to ensure that each distinct object in the image is detected only once.

---

**Q: In the context of Convolutional Neural Networks (CNNs), what is the purpose of pooling layers?**

**SHORT ANSWER:** Pooling layers are used in Convolutional Neural Networks (CNNs) primarily for dimensionality reduction and making the network more robust to small variations in the input. A pooling operation typically takes a small window (e.g., 2x2) and a stride, and slides this window over the input feature map. Within each window, it computes a single value based on a specific operation, most commonly maximum pooling (taking the maximum value) or average pooling (taking the average value). By reducing the spatial dimensions (height and width) of the feature maps, pooling decreases the number of parameters and computations in subsequent layers, helping to prevent overfitting and making the network computationally more efficient. It also provides a form of translational invariance, meaning that slight shifts in the position of features in the input will not drastically change the pooled output.

---

**Q: Which computer vision task involves annotating images at the pixel level to delineate the exact boundaries of objects or regions?**
- A) Object Classification
- B) Object Localization
- C) Object Detection
- D) Image Segmentation

**Answer:** D
Rationale: Object Classification assigns a single label to the entire image. Object Localization predicts a bounding box around a *single* primary object in the image. Object Detection predicts bounding boxes around *multiple* objects in the image. Image Segmentation is the task of dividing an image into segments, often corresponding to individual objects or regions, requiring pixel-level annotations to define the precise shape and boundaries of each entity. The slide shows an example with pixel-level annotations for segmentation.

---

**Q: Calculate the number of parameters in a fully connected layer with 4096 inputs and 1000 outputs.**
- A) 4096 * 1000
- B) 4096 * 1000 + 4096
- C) 4096 * 1000 + 1000
- D) 4096 + 1000

**Answer:** C
Rationale: The total number of parameters in a fully connected layer is calculated as the product of the number of inputs and the number of outputs, plus the number of biases, which equals the number of outputs. So, parameters = (input size * output size) + output size. With 4096 inputs and 1000 outputs, the calculation is 4096 * 1000 + 1000.

---

**Q: In the Non-Maximum Suppression (NMS) process for object detection, what happens to a bounding box if its Intersection over Union (IoU) with the currently selected highest-confidence box is greater than or equal to a predefined threshold (e.g., 0.5)?**
- A) It is selected as another final prediction.
- B) Its confidence score is increased.
- C) It is discarded or suppressed.
- D) It is adjusted to better fit the object.

**Answer:** C
Rationale: Non-Maximum Suppression is a post-processing technique to eliminate redundant bounding boxes. The process involves selecting the box with the highest confidence and then discarding or suppressing any other remaining boxes that have an IoU above a set threshold (like 0.5) with the selected box.

---

**Q: According to the provided study guide information, which of the following is explicitly EXCLUDED from the final exam?**
- A) Basic filtering operations
- B) Corner Detection (Harris)
- C) Backpropagation (weight updating mechanisms)
- D) Non maximum suppression in YOLOv1

**Answer:** C
Rationale: The study guide explicitly lists Backpropagation (weight updating mechanisms) as an excluded topic from the final exam. Basic filtering, Corner Detection (Harris), and Non maximum suppression in YOLOv1 are listed as included topics.

---

**Q: In Harris Corner Detection, how are flat regions, edges, and corners typically characterized by the eigenvalues ($\lambda_1$ and $\lambda_2$) derived from the image derivatives, based on the slides?**

**SHORT ANSWER:** In Harris Corner Detection, flat regions, edges, and corners are distinguished by the relative sizes and magnitudes of the eigenvalues $\lambda_1$ and $\lambda_2$. For flat regions, both $\lambda_1$ and $\lambda_2$ are small. For edges, one eigenvalue is large while the other is small (e.g., $\lambda_1$ large, $\lambda_2$ small, or vice versa), indicating a strong gradient in one direction. For corners, both $\lambda_1$ and $\lambda_2$ are large, indicating strong gradients in multiple directions.

---

**Q: What is the primary purpose of using Anchor Boxes in object detection algorithms like YOLO, according to the slides?**

**SHORT ANSWER:** Anchor boxes are used in object detection algorithms like YOLO to handle cases where multiple objects are present within the same grid cell. When multiple objects share a grid cell (e.g., a pedestrian and a car), each grid cell can have two or more predefined anchor boxes, each responsible for detecting an object of a specific shape or aspect ratio. This allows the model to predict and classify multiple objects within a single cell.

---

**Q: According to the slides, what does the image gradient represent, and what do its magnitude and direction indicate?**

**SHORT ANSWER:** The image gradient represents the rate of change of intensity in an image. The magnitude of the gradient indicates the edge strength or how rapidly the intensity is changing at a particular point. The direction of the gradient indicates the direction of the most rapid increase in intensity.

---

**Q: What are the consequences of submitting assignments late, based on the policies mentioned in the slides?**

**SHORT ANSWER:** The policies for late submission vary depending on when the assignment was released and whether a student has already used a late submission policy. If the assignment is not received within 4 days of the deadline, students who have not yet used one late submission policy will receive a penalty of -25% of the total score every day they are late after those 4 days. For students who have already used a late policy, a penalty of -25% of the total score is applied every day they are late starting from the submission deadline. No exceptions will be made. The final deadline for any submission is May 15th, as no submissions are allowed after that date due to the final grade submission deadline on May 20th.

---

**Q: How is the edge strength (gradient magnitude) calculated from the image gradient?**

**SHORT ANSWER:** The gradient of an image at a point (x, y) is represented as a vector containing the partial derivatives of the image intensity function I with respect to x and y: $\nabla I = [\frac{\partial I}{\partial x}, \frac{\partial I}{\partial y}]$. These partial derivatives indicate the rate of intensity change in the horizontal ($\frac{\partial I}{\partial x}$) and vertical ($\frac{\partial I}{\partial y}$) directions. The edge strength at that point is given by the magnitude of this gradient vector. The magnitude is calculated using the Pythagorean theorem on the components of the gradient vector: $\|\nabla I\| = \sqrt{(\frac{\partial I}{\partial x})^2 + (\frac{\partial I}{\partial y})^2}$. A high gradient magnitude indicates a strong intensity change, typically corresponding to an edge. The direction of the gradient, $\theta = \tan^{-1}(\frac{\partial I}{\partial y} / \frac{\partial I}{\partial x})$, indicates the direction of the most rapid increase in intensity, which is perpendicular to the edge orientation.

---

**Q: Why is smoothing often applied to an image before computing image derivatives or detecting edges?**

**SHORT ANSWER:** Image derivatives are used to detect locations of rapid intensity change, which correspond to edges. However, real-world images often contain noise, which manifests as high-frequency intensity variations. Computing a derivative directly on a noisy image would amplify this noise, resulting in spurious or fragmented edge detections. Smoothing (e.g., using a Gaussian filter or a box filter) is a process of applying a low-pass filter to the image, which averages pixel values in local neighborhoods and effectively reduces high-frequency noise. By smoothing the image first, the noise is suppressed while preserving the significant intensity changes caused by actual edges. The derivative is then computed on the smoothed image, leading to more reliable and accurate edge detection. The Sobel filter, for example, is explicitly presented as a filter that performs both smoothing and derivative calculation.

---

**Q: What is the main function of the Sobel filter in image processing, according to the lecture slides?**
- A) To apply a simple box blur for smoothing.
- B) To convert a color image to grayscale.
- C) To combine image smoothing with the computation of image derivatives for edge detection.
- D) To perform non-maximum suppression on bounding boxes.

**Answer:** C
Rationale: The slides discuss Sobel filters in the context of finding edges. They are described as performing both smoothing and calculating image derivatives.

---

**Q: In the context of introductory neural networks, what basic task can a single Perceptron perform?**
- A) Object classification into 1000 categories.
- B) Filtering an image to remove noise.
- C) Performing linear classification to separate data points into two categories.
- D) Detecting corners in an image.

**Answer:** C
Rationale: The slides introduce the Perceptron as a linear classifier. It uses a weighted sum of inputs and a step function to output a binary classification (0 or 1).

---

**Q: Describe the typical effect of applying a box filter to an image and mention one type of visual artifact it can introduce.**

**SHORT ANSWER:** Box filters are used to smooth an image by averaging pixel values within a square kernel. While effective for smoothing, they can introduce visual artifacts. One specific artifact mentioned in the slides is vertical and horizontal streaking in the resulting image.

---

**Q: Which of the following is listed as a key evaluation metric for object detection in the final exam topics?**
- A) Accuracy.
- B) Mean Average Precision (mAP).
- C) F1 Score.
- D) Top-5 Accuracy.

**Answer:** B
Rationale: The final exam topics explicitly list evaluation metrics for Object Localization and Detection, specifically mentioning mAP and IoU. Accuracy, F1 score, and Top-5 accuracy are listed as evaluation metrics for Object Classification.

---

**Q: According to the sources, what is a key characteristic of the ImageNet dataset related to the architecture of many classification networks?**
- A) It contains only grayscale images of size 28x28.
- B) It is primarily used for object localization tasks.
- C) It has 1000 classes, leading many classification networks (like AlexNet, VGG, Inception, ResNet) to have 1000 neurons in their final layer.
- D) It consists of color images that are all exactly 32x32 pixels in size.

**Answer:** C
Rationale: The ImageNet dataset is mentioned as a commonly used dataset for Object Classification. It is noted that ILSVRC challenges were based on ImageNet, and it has 1000 classes. This is why most classification networks studied (AlexNet, VGG, Inception, ResNet) have 1000 neurons in their final layer, corresponding to the 1000 classes. Options A and D describe characteristics of MNIST and CIFAR-10/100 datasets, respectively. Option B is incorrect; while datasets can be used for localization, ImageNet is specifically highlighted in the source in the context of classification.

---

**Q: Based on the examples shown in the slides comparing convolution and correlation, what is a key procedural difference between the two operations regarding the filter kernel?**

**SHORT ANSWER:** As depicted in the examples, a key procedural difference is that for convolution, the filter kernel is effectively flipped (both horizontally and vertically) before being applied to the image data. For correlation, the kernel is applied directly without being flipped.

---

**Q: Define a "well-posed problem" in computer vision according to Hadamard's criteria, as discussed in the sources.**

**SHORT ANSWER:** According to Hadamard's definition as described in the sources, a problem is considered well-posed if it satisfies three specific properties: 1) a solution exists, 2) the solution is unique, and 3) the solution continuously depends on the initial data. Problems that fail to meet one or more of these conditions are considered ill-posed.

---

**Q: Identify one example of a Mid-Level Vision task from the sources, and explain why it fits into this category.**

**SHORT ANSWER:** One example of a Mid-Level Vision task mentioned is creating a panoramic photo or multi-view stereo. These tasks involve processing information from one or more 2D images to reconstruct or create representations that often relate to the 3D world or multiple views, moving beyond simple pixel manipulation (Low-Level Vision) but typically not requiring high-level semantic understanding of objects and scenes (High-Level Vision).

---

**Q: According to the sources, what is a primary function of Box filters in image processing, and what specific visual characteristic or artifact is noted about them?**

**SHORT ANSWER:** A primary function of Box filters is to smooth an image. However, a noted artifact or visual characteristic they can introduce is vertical and horizontal streaking in the resulting image.

---

**Q: Describe the iterative process of Non-Maximum Suppression (NMS) as outlined in the sources, including the initial filtering step and the subsequent steps involving confidence scores and IoU.**

**SHORT ANSWER:** The iterative process of Non-Maximum Suppression (NMS), as described in the sources for object detection, begins by discarding any bounding boxes with a confidence score (pc) below a predefined threshold (e.g., pc ≤ 0.6). Then, while there are remaining bounding boxes, the box with the largest confidence score is chosen, selected as a final prediction, and output. Subsequently, any other remaining bounding boxes that have an Intersection over Union (IoU) score greater than or equal to a specific threshold (e.g., IoU $\geq$ 0.5) with the just-selected box are discarded or suppressed. This procedure is repeated until no bounding boxes remain. The objective is to retain only the most confident and non-overlapping detection for each object instance.