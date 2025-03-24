# Hadoop and MapReduce Multiple Choice Exam

**Q: What is Hadoop?**
- A) A programming language for big data
- B) An open-source framework for distributed computing and data storage
- C) A relational database management system
- D) A single-server solution for data processing

**Answer:** B

---

**Q: What is Apache Spark's main advantage over traditional MapReduce?**
- A) It has a simpler programming model
- B) It can process data in-memory, making it faster for iterative algorithms
- C) It has better file compression
- D) It supports more programming languages

**Answer:** B

---

**Q: In Hadoop streaming, what allows you to write MapReduce jobs in languages other than Java?**
- A) The ability to use standard input/output for data exchange
- B) A special compiler for multiple languages
- C) Native code libraries for each supported language
- D) Serialization of data between different processes

**Answer:** A

---

**Q: What does Hadoop's "rack awareness" feature primarily optimize?**
- A) Power consumption
- B) Network traffic
- C) CPU utilization
- D) Disk I/O

**Answer:** B

---

**Q: What is the purpose of Apache ZooKeeper in the Hadoop ecosystem?**
- A) Monitoring and alerting for node failures
- B) Coordination service for distributed applications
- C) Workload balancing across nodes
- D) User authentication and authorization

**Answer:** B

---

**Q: Which statement best describes the relationship between HDFS and HBase?**
- A) They are competing technologies that solve the same problem
- B) HBase provides random, real-time read/write access to data stored in HDFS
- C) HDFS is a replacement for HBase in newer Hadoop versions
- D) HBase is a programming interface for accessing HDFS data

**Answer:** B

---

**Q: What is the role of the "Reporter" object in a MapReduce job?**
- A) It generates final reports after job completion
- B) It allows tasks to update their status and progress
- C) It reports errors to the administrator
- D) It creates log files for debugging

**Answer:** B

---

**Q: What feature allows a MapReduce application to skip bad records?**
- A) SequenceFile format
- B) InputSampler
- C) SkipBadRecords class
- D) RecordReader validation

**Answer:** C

---

**Q: What is the function of the "FileInputFormat.setInputPaths()" method in Hadoop?**
- A) It sets the output directory for a MapReduce job
- B) It configures the input split size
- C) It specifies the input files or directories for a MapReduce job
- D) It determines how files are partitioned in HDFS

**Answer:** C

---

**Q: Which design consideration is NOT typically associated with HDFS?**
- A) High throughput over low latency
- B) Support for small files and random access
- C) Moving computation to data
- D) Portability across heterogeneous hardware and OS platforms

**Answer:** B

---

**Q: In a typical Hadoop architecture, which node types would you find?**
- A) Master, worker, and client nodes
- B) Primary, secondary, and tertiary nodes
- C) Control, data, and edge nodes
- D) Manager, executor, and scheduler nodes

**Answer:** A

---

**Q: What is the purpose of using the TextInputFormat in a MapReduce job?**
- A) To process structured text data in SQL format
- B) To read input files line by line as text
- C) To handle compression of text files
- D) To convert binary data to text

**Answer:** B

---

**Q: Which serialization framework is commonly used with Hadoop?**
- A) JSON
- B) XML
- C) Avro
- D) YAML

**Answer:** C

---

**Q: How does Hadoop handle "small files problem"?**
- A) By automatically compressing small files
- B) By using HAR (Hadoop Archive) files or SequenceFiles
- C) By storing small files in a separate optimized filesystem
- D) By converting small files to columnar format

**Answer:** B

---

**Q: What is the recommended approach for handling iterative algorithms in traditional MapReduce?**
- A) Using recursive functions
- B) Chaining multiple MapReduce jobs
- C) Using multi-threaded mappers
- D) Implementing custom iterators in the Reducer

**Answer:** B

---

**Q: What is Apache Sqoop used for in the Hadoop ecosystem?**
- A) Data visualization
- B) Transferring data between Hadoop and relational databases
- C) Monitoring cluster health
- D) Scheduling workflows

**Answer:** B

---

**Q: What types of nodes typically have YARN installed in a Hadoop cluster?**
- A) Only the master nodes
- B) Only the worker nodes
- C) Both master and worker nodes
- D) Edge nodes only

**Answer:** C

---

**Q: In Hadoop security, what does Kerberos provide?**
- A) Data encryption
- B) Authentication
- C) Authorization
- D) Auditing

**Answer:** B

---

**Q: What happens to the intermediate data between Map and Reduce phases in Hadoop?**
- A) It is stored in HDFS with replication
- B) It is stored in the local file system of the TaskTracker nodes
- C) It is kept in memory only
- D) It is stored in a temporary distributed database

**Answer:** B

---

**Q: Which framework is designed to replace MapReduce in Hadoop 2.0+?**
- A) Apache Tez
- B) Apache Storm
- C) Apache Samza
- D) Apache Flink

**Answer:** A

---

**Q: What is Apache Ambari in the Hadoop ecosystem?**
- A) A machine learning library
- B) A data ingestion tool
- C) A management and monitoring interface for Hadoop clusters
- D) A workflow scheduling tool

**Answer:** C

---

**Q: Which technique is used in MapReduce to optimize joining large datasets?**
- A) Using SQL JOIN syntax
- B) Map-side join or Reduce-side join
- C) Using RAID configurations
- D) Vertical partitioning

**Answer:** B

---

**Q: In HDFS, how are large files stored?**
- A) As compressed archives
- B) Divided into blocks and distributed across DataNodes
- C) In a single DataNode with higher capacity
- D) Using RAID striping

**Answer:** B

---

**Q: What is a major limitation of the original (Hadoop 1.x) MapReduce framework?**
- A) It cannot process structured data
- B) It only supports Java programming
- C) It processes input only in key-value format
- D) It only supports batch processing, not interactive queries

**Answer:** D

---

**Q: Which tool provides a SQL-like interface directly on top of MapReduce?**
- A) Sqoop
- B) Flume
- C) Hive
- D) Mahout

**Answer:** C

---

**Q: What is the primary purpose of Apache Flume in the Hadoop ecosystem?**
- A) Managing workflow scheduling
- B) Collecting, aggregating, and moving large amounts of streaming data
- C) Providing SQL interface to Hadoop
- D) Machine learning algorithms

**Answer:** B

---

**Q: What does the "DistributedCache" feature in Hadoop do?**
- A) Distributes processing across the cache memory of all nodes
- B) Caches frequently accessed HDFS blocks
- C) Distributes read-only files/archives to all nodes before job execution
- D) Maintains a cache of recently submitted jobs

**Answer:** C

---

**Q: Which is a correct sequence of operations in a typical MapReduce job?**
- A) Input → Map → Combine → Partition → Shuffle → Sort → Reduce → Output
- B) Input → Partition → Map → Sort → Shuffle → Combine → Reduce → Output
- C) Input → Map → Sort → Partition → Shuffle → Combine → Reduce → Output
- D) Input → Combine → Map → Shuffle → Sort → Partition → Reduce → Output

**Answer:** A

---

**Q: What does the "fs.default.name" property specify in Hadoop configuration?**
- A) The default file name format
- B) The location where logs are stored
- C) The hostname and port for the NameNode
- D) The default namespace for user files

**Answer:** C

---

**Q: What design pattern inspired the development of MapReduce?**
- A) Singleton pattern
- B) Master-slave pattern
- C) Divide and conquer
- D) Observer pattern

**Answer:** C

---

**Q: How does Hadoop handle node failures during job execution?**
- A) It restarts the entire job from the beginning
- B) It re-executes only the failed tasks
- C) It skips the failed tasks and continues with remaining tasks
- D) It attempts to recover the intermediate data from failed nodes

**Answer:** B

---

**Q: What command is used to put a local file into HDFS?**
- A) hdfs dfs -put
- B) hdfs dfs -get
- C) hdfs dfs -cp
- D) hdfs dfs -mv

**Answer:** A

---

**Q: What is a typical use case for the "Combiner" in MapReduce?**
- A) Enhancing network security
- B) Reducing the amount of data transferred between mappers and reducers
- C) Combining multiple input sources
- D) Merging the output of different jobs

**Answer:** B

---

**Q: Which Hadoop component handles resource management in Hadoop 2.x?**
- A) MapReduce
- B) HDFS
- C) YARN
- D) JobTracker

**Answer:** C

---

**Q: What file format is NOT natively supported in Hadoop?**
- A) Text files
- B) SequenceFiles
- C) Microsoft Word documents
- D) Avro files

**Answer:** C

---

**Q: Which parameter in Hadoop configuration determines how many map tasks run in parallel on a node?**
- A) mapred.tasks.maximum
- B) mapred.tasktracker.map.tasks.maximum
- C) mapred.max.map.tasks
- D) mapred.map.parallel.tasks

**Answer:** B

---

**Q: What is the main benefit of using the SequenceFile format in Hadoop?**
- A) Human readability
- B) Compatibility with SQL databases
- C) Binary format with compression and serialization support
- D) Web browser support

**Answer:** C

---

**Q: In a MapReduce job, what determines the number of map tasks?**
- A) The number of input files
- B) The number of nodes in the cluster
- C) The number of reducers
- D) The number and size of input splits

**Answer:** D

---

**Q: What happens if a NameNode fails and there is no backup?**
- A) Data is lost but can be recovered from logs
- B) DataNodes take over NameNode functionality
- C) The entire file system is inaccessible until NameNode recovery
- D) Secondary NameNode automatically becomes the primary

**Answer:** C

---

**Q: What is the role of "RecordReader" in Hadoop?**
- A) Reading records from the NameNode's memory
- B) Converting input splits into key-value pairs
- C) Recording job execution metrics
- D) Reading log files

**Answer:** B

---

**Q: Which of the following is a higher-level abstraction on top of MapReduce?**
- A) HDFS
- B) Pig
- C) ZooKeeper
- D) Cassandra

**Answer:** B

---

**Q: What is "speculative execution" in Hadoop?**
- A) A performance optimization where the same task is executed on multiple nodes
- B) A scheduling algorithm for predicting future workloads
- C) A security feature for validating job execution
- D) A fault tolerance mechanism for JobTracker

**Answer:** A

---

**Q: Which of these is NOT a valid InputFormat in Hadoop?**
- A) TextInputFormat
- B) KeyValueInputFormat
- C) DatabaseInputFormat
- D) SequenceFileInputFormat

**Answer:** C

---

**Q: What is the purpose of the "OutputCommitter" in Hadoop?**
- A) To merge multiple outputs
- B) To handle job setup, cleanup, and output file commits
- C) To compress the output files
- D) To distribute output to clients

**Answer:** B

---

**Q: What is HBase in the Hadoop ecosystem?**
- A) A scheduling tool
- B) A non-relational distributed database
- C) A data visualization tool
- D) A batch processing framework

**Answer:** B

---

**Q: What happens during the "shuffle and sort" phase in MapReduce?**
- A) Input data is randomly distributed to maximize parallelism
- B) The final output is sorted for user presentation
- C) Mapper outputs are sorted by key and transferred to reducers
- D) Data nodes are reorganized for optimal performance

**Answer:** C

---

**Q: When did Doug Cutting start developing Hadoop?**
- A) 2002
- B) 2005
- C) 2008
- D) 2011

**Answer:** B

---

**Q: Which of the following best describes data locality in Hadoop?**
- A) Storing all data in a central location
- B) Moving computation close to where the data resides
- C) Ensuring all data is in the same data center
- D) Replicating all data to every node

**Answer:** B

---

**Q: What does the TaskTracker do in a Hadoop 1.x cluster?**
- A) Tracks the overall job progress
- B) Executes map and reduce tasks assigned by the JobTracker
- C) Monitors data node health
- D) Tracks file metadata

**Answer:** B

---

**Q: What is the recommended replication strategy in HDFS?**
- A) One replica on local node, all others on a single remote rack
- B) All replicas on a single rack
- C) One replica on local node, one on a node in the same rack, one on a different rack
- D) Random distribution of all replicas

**Answer:** C

---

**Q: Which of these best describes Hadoop's approach to fault tolerance?**
- A) Preventing failures through redundant high-end hardware
- B) Detecting failures and recovering through data replication
- C) Using RAID configurations for all storage
- D) Running backup systems that take over immediately

**Answer:** B

---

**Q: What does YARN stand for in Hadoop 2.x?**
- A) Yet Another Resource Negotiator
- B) Yield And Resource Network
- C) Yearly Automated Resource Navigator
- D) Your Application Runtime Node

**Answer:** A

---

**Q: Which pattern does MapReduce implement?**
- A) Observer pattern
- B) Factory pattern
- C) Divide and conquer
- D) Model-View-Controller

**Answer:** C

---

**Q: What is the primary purpose of the MapReduce shuffle phase?**
- A) Randomly reorganizing data for better distribution
- B) Transferring map outputs to appropriate reducers
- C) Sorting the final output of the job
- D) Optimizing the cluster's network traffic

**Answer:** B

---

**Q: Who are the original creators of Hadoop?**
- A) Larry Page and Sergey Brin
- B) Doug Cutting and Mike Cafarella
- C) James Gosling and Linus Torvalds
- D) Jeffrey Dean and Sanjay Ghemawat

**Answer:** B

---

**Q: The core components of Hadoop are:**
- A) HDFS and MapReduce
- B) Java and Python
- C) MySQL and MongoDB
- D) Hive and Pig

**Answer:** B

---

**Q: Describe the MapReduce programming model and explain how it processes large datasets.**

**SHORT ANSWER:** MapReduce is a programming model designed for processing large datasets in parallel across a distributed cluster. It consists of two primary phases:

1. Map phase: Input data is divided into chunks and processed in parallel by map tasks. Each mapper transforms input records into intermediate key-value pairs. This phase handles the "divide" part of divide-and-conquer, allowing independent processing of data chunks.

2. Reduce phase: The intermediate results from mappers are grouped by keys, and each group is processed by a reducer that aggregates or summarizes the values associated with each key to produce the final output.

Between these phases, a "shuffle and sort" step occurs where the system sorts and transfers the intermediate key-value pairs from mappers to the appropriate reducers.

MapReduce enables processing of massive datasets by:
- Distributing computation across many nodes
- Moving computation to where data resides to minimize network traffic
- Handling fault tolerance automatically by rerunning failed tasks
- Providing a simple programming model that abstracts away the complexities of distributed processing

This model is particularly effective for problems that can be decomposed into independent sub-tasks and later combined, such as counting, filtering, aggregation, and joining of large datasets.

---

**Q: What does HDFS stand for?**
- A) High Distributed File System
- B) Hadoop Database File System
- C) Hadoop Distributed File System
- D) High-Density File Storage

**Answer:** C

---

**Q: What is the default replication factor in HDFS?**
- A) 1
- B) 2
- C) 3
- D) 5

**Answer:** C

---

**Q: Which of these is NOT a key principle of Hadoop's design?**
- A) Scale "out" not "up"
- B) Move processing to the data
- C) Process data randomly, with frequent seeks
- D) Process data sequentially, avoid random access

**Answer:** C

---

**Q: The concept of MapReduce originated from:**
- A) Object-oriented programming
- B) Functional programming languages
- C) Structured programming
- D) Procedural programming

**Answer:** B

---

**Q: In a Hadoop cluster, the NameNode:**
- A) Stores the actual data blocks
- B) Runs map and reduce tasks
- C) Manages filesystem metadata and directory structure
- D) Coordinates job execution on TaskTrackers

**Answer:** C

---

**Q: Which of the following is NOT a characteristic of Hadoop's distributed file system?**
- A) High degree of data replication
- B) Small block size (4KB)
- C) Optimized for batch processing
- D) Write-once-read-many access model

**Answer:** B

---

**Q: In the MapReduce paradigm, which function transforms input data into key-value pairs?**
- A) Reduce
- B) Combine
- C) Map
- D) Partition

**Answer:** C

---

**Q: What does the Reduce phase in MapReduce do?**
- A) Split input data into smaller chunks
- B) Aggregate and summarize results from the Map phase
- C) Allocate resources for the Map phase
- D) Store the final output in HDFS

**Answer:** B

---

**Q: Which component manages the execution of MapReduce jobs in Hadoop?**
- A) DataNode
- B) NameNode
- C) JobTracker
- D) SecondaryNameNode

**Answer:** C

---

**Q: The word count example in Hadoop takes input text and:**
- A) Counts the total number of words in each file
- B) Counts the occurrences of each word across all input files
- C) Stores words alphabetically
- D) Calculates the frequency of letters

**Answer:** B

---

**Q: What happens if a DataNode fails in a Hadoop cluster?**
- A) All data in the cluster is lost
- B) The NameNode creates new replicas of the blocks on other DataNodes
- C) The JobTracker must restart all running jobs
- D) The entire cluster must be restarted

**Answer:** B

---

**Q: What is the default block size in HDFS?**
- A) 4MB
- B) 16MB
- C) 64MB
- D) 128MB

**Answer:** C

---

**Q: What is the default block size in HDFS?**
- A) 4MB
- B) 16MB
- C) 64MB
- D) 128MB

**Answer:** C

---

**Q: Explain why HDFS uses large block sizes and how this design decision impacts performance and scalability.**

**SHORT ANSWER:** HDFS uses large block sizes (traditionally 64MB, now often 128MB or 256MB) for several important reasons:

1. Reduced metadata overhead: With larger blocks, there are fewer total blocks to track, which means the NameNode needs to store less metadata in memory.

2. Reduced network overhead: Larger blocks minimize the number of connections and setup/teardown operations required when accessing data.

3. Optimization for sequential access: HDFS is designed for batch processing and sequential reads of large files. Larger blocks allow for longer continuous reads without the overhead of moving to a new block.

4. Amortization of disk seek time: The time spent seeking to a new disk location is amortized over a larger amount of data read.

5. MapReduce efficiency: The MapReduce framework typically assigns one map task per block, so larger blocks mean fewer map tasks and reduced task initialization overhead.

However, this large block size makes HDFS less efficient for small files or random access patterns. If files are much smaller than a block size, storage space is wasted and the system still needs to track many small files, creating "small file problem" scenarios.

The large block size design decision directly supports Hadoop's goal of high throughput over low latency, and enables it to scale to petabytes of data across thousands of nodes.

---

**Q: In Hadoop, "rack awareness" refers to:**
- A) Physical organization of server racks
- B) A strategy to optimize network traffic by considering the physical network topology
- C) The ability to add more racks to a cluster
- D) A security protocol for rack-based access

**Answer:** B

---

**Q: How does Hadoop handle node failures during job execution?**
- A) It restarts the entire job from the beginning
- B) It re-executes only the failed tasks
- C) It skips the failed tasks and continues with remaining tasks
- D) It attempts to recover the intermediate data from failed nodes

**Answer:** B

---

**Q: Explain Hadoop's approach to fault tolerance and why it's critical for big data processing.**

**SHORT ANSWER:** Hadoop's fault tolerance is built on several key mechanisms that allow it to reliably process massive datasets on commodity hardware where failures are expected:

1. Data replication: HDFS replicates data blocks across multiple machines (typically 3 copies) using a rack-aware placement policy. This ensures data is available even if nodes or disks fail.

2. Heartbeat messages: DataNodes and TaskTrackers send regular heartbeats to the NameNode and JobTracker respectively. When a node stops sending heartbeats, it's marked as failed.

3. Task-level recovery: If a map or reduce task fails, the system automatically reschedules it on another healthy node. Only the failed task is re-executed, not the entire job.

4. Speculative execution: For stragglers (tasks running significantly slower than others), Hadoop can launch backup executions of the same task on different nodes and use the result from whichever finishes first.

5. Job restart capability: If the JobTracker/ResourceManager fails, jobs can be restarted from the beginning or from saved checkpoints.

This fault tolerance is critical for big data processing because:
- Large-scale clusters (thousands of nodes) will inevitably experience hardware failures
- Long-running jobs would be impractical if they had to restart completely after any failure
- It enables the use of cheaper commodity hardware rather than expensive fault-resistant systems
- It removes the burden of handling failures from application developers

This approach allows Hadoop to provide reliable results even in the presence of infrastructure failures, which is essential when processing datasets at petabyte scale.

---

**Q: Which of the following is NOT an advantage of using Hadoop?**
- A) Scalability
- B) Fault tolerance
- C) Real-time processing
- D) Ability to process unstructured data

**Answer:** C

---

**Q: What programming language is Hadoop primarily written in?**
- A) Python
- B) C++
- C) Java
- D) Scala

**Answer:** C

---

**Q: Which of these is a single point of failure in a standard Hadoop deployment?**
- A) DataNode
- B) TaskTracker
- C) NameNode
- D) Client nodes

**Answer:** C

---

**Q: What was Hadoop named after?**
- A) Its creator's pet dog
- B) Its creator's pet elephant toy
- C) High Availability Distributed Object-Oriented Platform
- D) Hierarchical Algorithmic Data Operations Platform

**Answer:** B

---

**Q: Which company contributed most significantly to Hadoop's early development?**
- A) Google
- B) Microsoft
- C) Facebook
- D) Yahoo

**Answer:** D

---

**Q: The "Map" in MapReduce has its roots in which programming concept?**
- A) For loops
- B) Apply-to-all functions
- C) Case statements
- D) Recursion

**Answer:** B

---

**Q: Which of these is NOT a challenge addressed by Hadoop?**
- A) Storage of large datasets
- B) Processing of large datasets
- C) Real-time transaction processing
- D) Fault tolerance in commodity hardware

**Answer:** C

---

**Q: What type of jobs is Hadoop BEST suited for?**
- A) Small data, complex algorithms
- B) Batch processing of large datasets
- C) Real-time data analytics
- D) Low-latency transaction processing

**Answer:** B

---

**Q: Which of the following is a function of SecondaryNameNode?**
- A) It takes over if the primary NameNode fails
- B) It runs secondary, less important jobs
- C) It merges the NameNode's edit logs with the filesystem image
- D) It manages secondary data storage

**Answer:** C

---

**Q: What does the Combiner do in a MapReduce job?**
- A) Combines multiple input files
- B) Performs local aggregation before data is sent to reducers
- C) Combines the output of multiple reducers
- D) Merges the code from mappers and reducers

**Answer:** B

---

**Q: What is the role of InputFormat in Hadoop MapReduce?**
- A) It defines how input data is compressed
- B) It parses input data as key-value pairs
- C) It defines how input data is split and read
- D) It formats the data for display to users

**Answer:** C

---

**Q: In what year did Apache Hadoop 1.0.0 release?**
- A) 2006
- B) 2008
- C) 2011
- D) 2014

**Answer:** C

---

**Q: Which of these is a sub-project of Hadoop that provides SQL-like access to data?**
- A) Hive
- B) Spark
- C) ZooKeeper
- D) Flume

**Answer:** A

---

**Q: What is the "Reduce" operation in functional programming?**
- A) Applying the same operation to every element in a collection
- B) Removing unnecessary elements from a collection
- C) Aggregating a collection into a single value
- D) Distributing operations across multiple processors

**Answer:** C

---

**Q: What happens if a map task fails in Hadoop?**
- A) The entire job fails
- B) Only that particular map task is rerun
- C) All map tasks must be restarted
- D) The NameNode must be restarted

**Answer:** B

---

**Q: What is a fundamental difference between Google's MapReduce and Apache Hadoop?**
- A) Hadoop is written in Java, while Google's implementation is in C++
- B) Google's implementation does not use distributed file systems
- C) Hadoop does not support reduce operations
- D) Google's implementation only works on single machines

**Answer:** A

---

**Q: In HDFS, what does a client application communicate with first?**
- A) DataNode
- B) NameNode
- C) JobTracker
- D) TaskTracker

**Answer:** B

---

**Q: What type of filesystem operations does HDFS NOT support?**
- A) Reading files
- B) Creating directories
- C) File modifications after creation
- D) File deletion

**Answer:** C

---

**Q: What does the Partitioner do in a MapReduce job?**
- A) Divides input data into equal parts
- B) Determines which reducer will receive a particular key
- C) Splits large files in HDFS
- D) Controls the distribution of map tasks

**Answer:** B