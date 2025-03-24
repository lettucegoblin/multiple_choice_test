# Sample Test with Short Answer Questions

**Q: What is the primary purpose of a firewall?**  
- A) Encrypting all network traffic.  
- B) Filtering network traffic based on defined security rules.  
- C) Storing backup data for recovery.  
- D) Managing user authentication credentials.  

**Answer:** B  

---  

**Q: Explain how SQL injection attacks work and provide at least two prevention methods.**

**SHORT ANSWER:** SQL injection attacks occur when malicious SQL code is inserted into input fields that are directly used in database queries without proper sanitization or validation. When these inputs are processed, the injected SQL code executes unintended commands on the database, potentially allowing attackers to access, modify, or delete data.

Prevention methods include:
1. Using prepared statements with parameterized queries to separate SQL code from data
2. Input validation and sanitization to filter out malicious characters
3. Implementing the principle of least privilege for database accounts
4. Using stored procedures that limit the scope of what can be executed
5. Employing an ORM (Object-Relational Mapping) framework that handles SQL escaping automatically

---

**Q: Which type of firewall works at the application layer of the OSI model?**  
- A) Packet-filtering firewall  
- B) Stateful inspection firewall  
- C) Web application firewall (WAF)  
- D) Circuit-level gateway  

**Answer:** C  

---  

**Q: Describe the concept of HTTPS and explain why it is important for web security.**

**SHORT ANSWER:** HTTPS (Hypertext Transfer Protocol Secure) is a secure version of HTTP that uses SSL/TLS protocols to encrypt communications between a client and a web server. It functions by establishing an encrypted connection using cryptographic protocols and digital certificates.

HTTPS is important for web security for several reasons:
1. It encrypts data in transit, preventing eavesdropping and man-in-the-middle attacks
2. It provides authentication, ensuring that users are communicating with the legitimate website
3. It maintains data integrity, ensuring that data isn't modified during transmission
4. It builds trust with users, as indicated by the padlock symbol in browsers
5. It's required for compliance with many security standards and regulations
6. It protects sensitive information like login credentials, payment details, and personal information

---

**Q: What is the default action of a whitelist-based firewall configuration?**  
- A) Allow all traffic unless explicitly denied.  
- B) Deny all traffic unless explicitly allowed.  
- C) Only log traffic without taking any actions.  
- D) Block traffic from unencrypted sources only.  

**Answer:** B  

---

**Q: Explain the difference between symmetric and asymmetric encryption and provide a use case for each.**

**SHORT ANSWER:** Symmetric encryption uses the same key for both encryption and decryption processes. The key must be shared securely between parties. Asymmetric encryption uses a pair of mathematically related keys (public and private), where data encrypted with one key can only be decrypted with its corresponding pair.

Symmetric encryption:
- Faster and more efficient for large amounts of data
- Commonly used for encrypting files, databases, or session data
- Examples include AES, DES, and Blowcrypt
- Use case: Encrypting a large file on your hard drive for personal use

Asymmetric encryption:
- More secure for key exchange and authentication
- Computationally intensive and slower than symmetric encryption
- Examples include RSA, ECC, and DSA
- Use case: Secure communication establishment in HTTPS, where asymmetric encryption is used for initial key exchange, after which symmetric encryption takes over for session data