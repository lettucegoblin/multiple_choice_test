# Computer Vision Final Exam Practice - Version 2

**Q: In the SIFT algorithm, how many dimensions does the final feature descriptor have?**
- A) 64
- B) 128
- C) 256
- D) 512

**Answer:** B
Rationale: SIFT produces 128-dimensional feature vectors by dividing a 16×16 region around each keypoint into 4×4 subregions, computing an 8-bin orientation histogram for each subregion, and concatenating them (4×4×8 = 128).

---

**Q: Calculate the number of parameters in a convolutional layer with 64 filters, 3×3 kernel size, and 32 input channels.**
- A) 18,432
- B) 18,496
- C) 576
- D) 640

**Answer:** B
Rationale: Using the formula: m × (f × f × m_in + 1) = 64 × (3 × 3 × 32 + 1) = 64 × 289 = 18,496 parameters. Each filter has 3×3×32 weights plus 1 bias.

---

**Q: What is the primary computational advantage of pooling layers in CNNs?**
- A) They have many learnable parameters
- B) They increase the spatial dimensions
- C) They have no learnable parameters and reduce spatial dimensions
- D) They perform complex mathematical operations

**Answer:** C
Rationale: Pooling layers have NO weights or biases (no learnable parameters) and reduce the spatial dimensions of feature maps, making the network more computationally efficient and providing translation invariance.

---

**Q: In the formula for CNN output size [(n_in + 2p - f)/s + 1], if you have a 32×32 input, 5×5 filter, stride 2, and padding 2, what is the output size?**
- A) 14×14
- B) 15×15
- C) 16×16
- D) 17×17

**Answer:** C
Rationale: Using the formula: (32 + 2×2 - 5)/2 + 1 = (32 + 4 - 5)/2 + 1 = 31/2 + 1 = 15.5 + 1 = 16.5, which rounds down to 16. So the output is 16×16.

---

**Q: What activation function is defined as (e^x - e^(-x))/(e^x + e^(-x))?**
- A) ReLU
- B) Sigmoid
- C) Tanh
- D) Leaky ReLU

**Answer:** C
Rationale: This is the formula for the hyperbolic tangent (tanh) function, which outputs values between -1 and 1.

---

**Q: Explain the role of scale space and octaves in the SIFT algorithm, and why they are important for achieving scale invariance.**

**SHORT ANSWER:** In SIFT, scale space is created by convolving the image with Gaussian filters at progressively increasing scales (sigma values). This produces a set of blurred images that simulate the appearance of the same scene viewed from different distances. Octaves are groups of scales where each octave represents a doubling of the scale - the image resolution is halved between octaves. Within each octave, several scales are computed. This multi-scale representation allows SIFT to detect features that remain stable across different scales. By finding keypoints that are extrema in the Difference of Gaussians (DoG) across both spatial dimensions and scale, SIFT can identify features that persist when the image is viewed at different sizes. This is crucial for scale invariance because the same physical feature might appear at different sizes in different images depending on camera distance or zoom level.

---

**Q: Which dataset is described as having 80 classes with bounding boxes and more complex scenes compared to PASCAL-VOC?**
- A) ImageNet
- B) MNIST
- C) COCO (MS-COCO)
- D) CIFAR-100

**Answer:** C
Rationale: MS-COCO is specifically mentioned in the study guide as having 80 classes with bounding boxes and more complex scenes and annotations compared to PASCAL-VOC.

---

**Q: What is the primary purpose of the objectness score in YOLO-style object detection?**
- A) To determine the class of the object
- B) To indicate whether an object exists in a grid cell
- C) To calculate the bounding box dimensions
- D) To perform non-maximum suppression

**Answer:** B
Rationale: The objectness score (often denoted as pc or confidence) indicates the probability that an object exists within a particular grid cell, separate from the class prediction.

---

**Q: In a fully connected layer with 4096 inputs and 1000 outputs, how many total parameters (weights + biases) are there?**
- A) 4,096,000
- B) 4,097,000
- C) 5,096
- D) 1,000

**Answer:** B
Rationale: Total parameters = (inputs × outputs) + outputs = (4096 × 1000) + 1000 = 4,096,000 + 1,000 = 4,097,000.

---

**Q: What is the ReLU activation function formula?**
- A) 1/(1+e^(-x))
- B) max(0, x)
- C) (e^x - e^(-x))/(e^x + e^(-x))
- D) e^x

**Answer:** B
Rationale: ReLU (Rectified Linear Unit) is defined as f(x) = max(0, x), outputting 0 for negative inputs and x for positive inputs.

---

**Q: Describe the complete process of Non-Maximum Suppression (NMS) in object detection, including the initial filtering step and the iterative suppression process.**

**SHORT ANSWER:** Non-Maximum Suppression (NMS) is used to eliminate redundant bounding box predictions in object detection. The process begins with an initial filtering step where all bounding boxes with confidence scores below a threshold (e.g., 0.6) are discarded. Then, the iterative process starts: 1) Select the bounding box with the highest confidence score from the remaining boxes, 2) Add this box to the final predictions, 3) Calculate the Intersection over Union (IoU) between this selected box and all remaining boxes, 4) Suppress (remove) all boxes that have an IoU greater than or equal to a threshold (typically 0.5) with the selected box, 5) Repeat steps 1-4 with the remaining boxes until no boxes are left. This ensures that for each object, only the most confident detection is retained while eliminating duplicate or heavily overlapping predictions.

---

**Q: What is the key advantage of YOLOv1's approach to object detection compared to multi-stage approaches?**
- A) Higher accuracy on small objects
- B) Single-pass detection through the entire image
- C) Better handling of overlapping objects
- D) More detailed segmentation

**Answer:** B
Rationale: YOLO (You Only Look Once) performs object detection in a single forward pass through the network, making it much faster than multi-stage approaches like R-CNN that require multiple passes.

---

**Q: In the Difference of Gaussians (DoG) used in SIFT, what is being computed?**
- A) The difference between two adjacent scales in the Gaussian scale space
- B) The gradient magnitude at each pixel
- C) The orientation histogram
- D) The final descriptor values

**Answer:** A
Rationale: DoG is computed by subtracting adjacent Gaussian-blurred images at different scales, approximating the Laplacian of Gaussian for extrema detection.

---

**Q: What is the formula for calculating Intersection over Union (IoU)?**
- A) Area of Union / Area of Intersection
- B) Area of Intersection / Area of Union
- C) (Area A + Area B) / Area of Intersection
- D) Area of Intersection / (Area A + Area B)

**Answer:** B
Rationale: IoU is calculated as the area of intersection between two bounding boxes divided by the area of their union, measuring the overlap between predicted and ground truth boxes.

---

**Q: Explain why convolutional layers are preferred over fully connected layers for image processing tasks, addressing parameter efficiency and spatial relationship preservation.**

**SHORT ANSWER:** Convolutional layers are preferred for image processing for two main reasons. First, parameter efficiency: convolutions use parameter sharing, where the same filter weights are applied across the entire image. This drastically reduces the number of parameters compared to fully connected layers. For example, connecting a 224×224×3 image directly to 1000 outputs would require about 150 million parameters in a fully connected layer, while a convolutional layer with 64 3×3 filters would only need about 1,700 parameters. Second, spatial relationship preservation: convolutional layers maintain the spatial structure of the input through local connectivity patterns. Each neuron in a conv layer is connected only to a local region of the input, preserving the 2D structure of images. Fully connected layers flatten the input, completely losing spatial relationships between pixels. This spatial preservation is crucial for detecting features like edges, corners, and textures that depend on the relative positions of pixels.

---

**Q: In the context of CNNs, what does "translation invariance" mean?**
- A) The network can translate images from one language to another
- B) The network can detect features regardless of their position in the image
- C) The network can move objects within the image
- D) The network can rotate features to any angle

**Answer:** B
Rationale: Translation invariance means the network can recognize the same feature regardless of where it appears in the image, achieved through convolution and pooling operations.

---

**Q: For the MNIST dataset, what are the image dimensions and number of classes?**
- A) 32×32×3 images, 10 classes
- B) 28×28×1 images, 10 classes
- C) 224×224×3 images, 1000 classes
- D) 64×64×1 images, 100 classes

**Answer:** B
Rationale: MNIST consists of 28×28 grayscale (1 channel) images of handwritten digits, representing 10 classes (digits 0-9).

---

**Q: What is the main difference between Top-1 and Top-5 accuracy metrics?**
- A) Top-1 uses one model, Top-5 uses five models
- B) Top-1 evaluates if the correct class is the highest prediction, Top-5 if it's in the top 5 predictions
- C) Top-1 is for detection, Top-5 is for classification
- D) Top-1 measures speed, Top-5 measures accuracy

**Answer:** B
Rationale: Top-1 accuracy measures the percentage of times the correct class is the model's highest confidence prediction. Top-5 accuracy measures the percentage of times the correct class appears among the model's top 5 predictions.

---

**Q: Describe the role of anchor boxes in object detection algorithms like YOLO, and explain how they help handle multiple objects in the same grid cell.**

**SHORT ANSWER:** Anchor boxes are predefined bounding boxes of different shapes and aspect ratios used in grid-based object detection algorithms. In YOLO, each grid cell can predict multiple bounding boxes, with each anchor box responsible for detecting objects of specific shapes. This solves the problem of multiple objects appearing in the same grid cell. For example, if a pedestrian and a car are both centered in the same grid cell, one anchor box (tall and thin) might specialize in detecting the pedestrian, while another (short and wide) might detect the car. Each anchor box predicts its own objectness score, class probabilities, and bounding box adjustments. During training, ground truth objects are assigned to the anchor box with the highest IoU, allowing the network to learn to specialize different anchors for different object types. This enables the detection of multiple objects with different aspect ratios within a single grid cell, significantly improving the algorithm's ability to handle complex scenes with overlapping objects.

---

**Q: What makes the XOR problem significant in the history of neural networks?**
- A) It was the first problem solved by neural networks
- B) It demonstrated that a single perceptron cannot solve non-linearly separable problems
- C) It proved that neural networks are universal approximators
- D) It led to the invention of convolutional neural networks

**Answer:** B
Rationale: The XOR problem showed that a single perceptron could not learn non-linearly separable functions, leading to the development of multi-layer perceptrons and highlighting the importance of hidden layers in neural networks.

---

**Q: In SIFT, why is orientation assignment performed before descriptor generation?**
- A) To speed up computation
- B) to achieve rotation invariance by aligning descriptors to a canonical orientation
- C) To reduce the descriptor size
- D) To improve keypoint localization

**Answer:** B
Rationale: Orientation assignment determines the dominant gradient direction around each keypoint. Descriptors are then computed relative to this orientation, ensuring that the same feature produces the same descriptor regardless of its rotation in the image.

---

**Q: Explain the concept of receptive field in CNNs and how it relates to the depth of the network and filter sizes.**

**SHORT ANSWER:** The receptive field is the region of the input image that influences a particular neuron's activation in a feature map. It determines how much context each neuron can "see" from the original input. In CNNs, the receptive field grows with network depth and filter size. For a single convolutional layer with a 3×3 filter, each neuron has a 3×3 receptive field. As we stack layers, the receptive field grows multiplicatively. For example, two 3×3 conv layers give a 5×5 receptive field, while three give a 7×7 receptive field. Larger filters directly increase the receptive field - a 5×5 filter creates a 5×5 receptive field in one layer. Stride also affects receptive field growth; stride > 1 causes the receptive field to grow faster through the network. This is important for hierarchical feature learning: early layers with small receptive fields detect local features like edges, while deeper layers with larger receptive fields can detect complex objects and understand global context. Modern architectures carefully balance depth, filter size, and stride to achieve appropriate receptive fields for their tasks.

---

**Q: What type of loss function is typically used for the classification component in object detection models?**
- A) Mean Squared Error (MSE)
- B) Cross-Entropy Loss
- C) Smooth L1 Loss
- D) Triplet Loss

**Answer:** B
Rationale: Cross-Entropy loss is used for the classification component to predict object classes, while MSE or Smooth L1 are used for the localization/regression component to predict bounding box coordinates.

---

**Q: Calculate the output spatial dimensions for a convolutional layer with input size 64×64, filter size 7×7, stride 2, and padding 3.**
- A) 29×29
- B) 30×30
- C) 31×31
- D) 32×32

**Answer:** D
Rationale: Using the formula: (64 + 2×3 - 7)/2 + 1 = (64 + 6 - 7)/2 + 1 = 63/2 + 1 = 31.5 + 1 = 32.5, which rounds down to 32. Output is 32×32.

---

**Q: Explain how the historical progression from handcrafted features to learned features changed computer vision, using SIFT as an example of the transition period.**

**SHORT ANSWER:** Before SIFT, computer vision relied entirely on handcrafted features where researchers manually designed feature detectors based on their understanding of the problem. These might include simple edge detectors, color histograms, or texture descriptors. SIFT represented a transition period - while still being a handcrafted algorithm, it introduced more sophisticated principles like scale invariance and automatic keypoint detection that would later influence learned features. SIFT showed that robust features needed to be invariant to scale, rotation, and illumination changes. With the advent of CNNs, the paradigm shifted completely to learned features. Instead of manually designing feature detectors, CNNs learn optimal features directly from data through backpropagation. This transition was revolutionary because: 1) Learned features often outperformed handcrafted ones, 2) The same architecture could learn features for different tasks without manual redesign, 3) Deep networks could learn hierarchical features that were difficult to handcraft. However, understanding algorithms like SIFT remains valuable as they provide insights into what makes good features and influenced the design of modern architectures (e.g., multi-scale processing in CNNs mirrors SIFT's scale-space approach).

---

**Q: What is the batch size hyperparameter and how does it affect training?**
- A) The number of layers in the network
- B) The size of convolutional filters
- C) The number of samples processed before updating weights
- D) The number of training epochs

**Answer:** C
Rationale: Batch size refers to the number of training samples processed together before performing one gradient update. It affects training stability, convergence speed, and memory requirements.

---

**Q: In the context of YOLO, what does "grid-based approach" mean?**
- A) The image is processed in a random grid pattern
- B) The image is divided into a grid where each cell predicts objects
- C) The network uses grid search for hyperparameters
- D) The features are arranged in a grid structure

**Answer:** B
Rationale: YOLO divides the input image into an S×S grid (e.g., 3×3), where each grid cell is responsible for predicting objects whose centers fall within that cell.

---

**Q: Describe the differences between loss functions used for object classification versus object detection, explaining why detection requires multiple loss components.**

**SHORT ANSWER:** Object classification uses a single loss function, typically cross-entropy loss, which measures the difference between predicted class probabilities and the true class label. The loss is computed over C classes for a single object per image. Object detection requires multiple loss components because it must solve several sub-problems simultaneously: 1) Classification loss (cross-entropy) - determines what class each detected object belongs to, 2) Localization loss (MSE or Smooth L1) - measures the error in predicted bounding box coordinates (x, y, width, height) compared to ground truth, 3) Objectness/confidence loss - determines whether an object exists in each predicted location (binary classification). In YOLO-style detectors, the total loss is a weighted sum: Loss_total = λ_coord × Location_loss + λ_obj × Objectness_loss + λ_class × Classification_loss. The weights (λ) balance the importance of each component. This multi-component loss is necessary because detection must not only classify objects correctly but also locate them precisely and distinguish between cells containing objects and background. Each component addresses a different aspect of the detection problem, and all must be optimized together for effective object detection.

---

**Q: What is the significance of using max(0, x) in the ReLU activation function?**
- A) It ensures all outputs are positive
- B) It introduces non-linearity while being computationally efficient
- C) It normalizes the output
- D) It prevents overfitting

**Answer:** B
Rationale: ReLU introduces non-linearity (essential for learning complex functions) while being computationally efficient. The max operation is simple to compute and has a straightforward derivative, making training faster than sigmoid or tanh.

---

**Q: Which component of SIFT provides illumination invariance?**
- A) Scale-space construction
- B) Keypoint localization
- C) Orientation assignment
- D) Descriptor normalization

**Answer:** D
Rationale: The final step in SIFT descriptor generation includes normalizing the 128-dimensional feature vector, which provides invariance to illumination changes by removing the effect of uniform brightness changes.