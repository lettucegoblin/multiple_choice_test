# Module 9: SQL Injection - Example Test

**Q: What is the primary goal of a SQL injection attack?**  
- A) To encrypt database content for secure storage.  
- B) To gain unauthorized access to database data by injecting malicious SQL code.  
- C) To optimize the performance of database queries.  
- D) To prevent users from accessing web applications.  

**Answer:** B  

---

**Q: Which of the following is a fundamental cause of SQL injection vulnerabilities?**  
- A) Use of HTTPS instead of HTTP.  
- B) Insufficient validation and sanitization of user inputs.  
- C) Overuse of encryption on database tables.  
- D) Limiting user access to only specific database tables.  

**Answer:** B  

---

**Q: Which SQL clause is commonly exploited during a SQL injection attack to retrieve all data from a table?**  
- A) INSERT  
- B) UPDATE  
- C) SELECT  
- D) DELETE  

**Answer:** C  

---

**Q: What is the purpose of the WHERE clause in a SQL statement?**  
- A) To specify which rows in the table should be affected by the query.  
- B) To sort the data returned from the database.  
- C) To calculate aggregate values from table data.  
- D) To define a new database structure.  

**Answer:** A  

---

**Q: In the context of SQL injection, what does the condition `1=1` achieve in a WHERE clause?**  
- A) It filters out all database records.  
- B) It retrieves all rows because the condition always evaluates to true.  
- C) It prevents the execution of SQL queries.  
- D) It encrypts the database records before retrieval.  

**Answer:** B  

---

**Q: What is one common way attackers use SQL injection to bypass authentication mechanisms?**  
- A) By injecting JavaScript into the database query.  
- B) By using statements like `' OR '1'='1` in login forms.  
- C) By encrypting the query parameters.  
- D) By replacing the query entirely with a DELETE command.  

**Answer:** B  

---

**Q: Which SQL statement is primarily used to modify existing data in a table?**  
- A) SELECT  
- B) INSERT  
- C) UPDATE  
- D) DELETE  

**Answer:** C  

---

**Q: What is the most effective way to prevent SQL injection attacks?**  
- A) Use prepared statements with parameterized queries.  
- B) Encrypt all user inputs before processing.  
- C) Store database queries in plain text files.  
- D) Disable user authentication on web applications.  

**Answer:** A  

---

**Q: How does an attacker typically exploit SQL injection vulnerabilities in a web application?**  
- A) By modifying the database schema directly.  
- B) By injecting malicious SQL code into user input fields.  
- C) By altering the server’s network configuration.  
- D) By using JavaScript obfuscation.  

**Answer:** B  

---

**Q: What is a key risk of SQL injection attacks?**  
- A) Unauthorized data access or modification.  
- B) The database is permanently deleted.  
- C) Web application performance slows significantly.  
- D) User sessions cannot be maintained.  

**Answer:** A  

---

**Q: Which database operation would be exploited by the following SQL injection:  
`SELECT * FROM users WHERE username='admin' AND password='' OR '1'='1';`**  
- A) Retrieving all user records without a valid password.  
- B) Deleting the entire user table.  
- C) Inserting a new administrator account into the table.  
- D) Updating the admin’s password to a new value.  

**Answer:** A  

---

**Q: What is one indicator of a successful SQL injection attack?**  
- A) The webpage displays all the database records.  
- B) The browser automatically encrypts all future inputs.  
- C) The user is logged out and denied access to the system.  
- D) The database server shuts down to prevent damage.  

**Answer:** A  

---

**Q: What is a typical characteristic of prepared statements in SQL?**  
- A) They allow the reuse of queries with user inputs safely embedded.  
- B) They automatically encrypt all data returned from the database.  
- C) They perform database operations in the frontend only.  
- D) They bypass the database engine for faster processing.  

**Answer:** A  

---

**Q: Which of the following is a valid countermeasure against SQL injection?**  
- A) Disable the database connection when a suspicious query is detected.  
- B) Use a whitelist of acceptable inputs for critical fields.  
- C) Store all SQL queries in the browser’s local cache.  
- D) Execute all queries directly in the shell environment.  

**Answer:** B  

---

**Q: Which of the following can be a consequence of an unmitigated SQL injection attack?**  
- A) The web server switches to a more secure protocol.  
- B) The attacker gains unauthorized access to sensitive data.  
- C) All SQL queries become encrypted automatically.  
- D) User inputs are permanently disabled on the website.  

**Answer:** B  

--- 

# Module 9: SQL Injection - Additional Example Questions  

**Q: Which type of SQL query is typically used to remove rows from a database table?**  
- A) INSERT  
- B) DELETE  
- C) UPDATE  
- D) SELECT  

**Answer:** B  

---

**Q: What does the `LIMIT` keyword do in a SQL query?**  
- A) Restricts the rows affected by the query based on a condition.  
- B) Specifies the maximum number of rows returned by the query.  
- C) Combines rows from multiple tables into a single output.  
- D) Prevents rows from being updated or deleted.  

**Answer:** B  

---

**Q: In a SQL injection attack, why might an attacker append a `--` comment in their input?**  
- A) To terminate the SQL query and ignore the rest of the legitimate query.  
- B) To encrypt the malicious SQL code.  
- C) To add an additional layer of obfuscation to the query.  
- D) To include extra instructions for database logging.  

**Answer:** A  

---

**Q: Which of the following database operations can be directly affected by SQL injection?**  
- A) Table encryption  
- B) Query execution  
- C) File uploads  
- D) HTTPS communications  

**Answer:** B  

---

**Q: How can SQL injection exploit a UNION query?**  
- A) By appending a UNION query to combine attacker-controlled data with legitimate results.  
- B) By using UNION to delete data from multiple tables at once.  
- C) By encrypting the original query results to prevent detection.  
- D) By modifying the schema of the database to introduce a UNION table.  

**Answer:** A  

---

**Q: What is one common reason that web applications fail to prevent SQL injection attacks?**  
- A) Use of modern databases like MySQL or PostgreSQL.  
- B) Over-reliance on client-side input validation.  
- C) Storing SQL queries in encrypted form.  
- D) Excessive use of prepared statements.  

**Answer:** B  

---

**Q: How does an attacker use a tautology in SQL injection?**  
- A) By adding logic that is always true, like `1=1`, to bypass conditions.  
- B) By including multiple tables in a single malicious query.  
- C) By using aliases to obfuscate query structure.  
- D) By leveraging the database's encryption mechanisms.  

**Answer:** A  

---

**Q: What is one of the key benefits of using stored procedures to mitigate SQL injection?**  
- A) They completely avoid user input during database operations.  
- B) They separate user input from SQL logic, reducing the risk of injection.  
- C) They automatically encrypt all database queries.  
- D) They prevent database administrators from accessing sensitive data.  

**Answer:** B  

---

**Q: What is the role of input sanitization in preventing SQL injection?**  
- A) It ensures only safe and valid inputs are accepted for processing.  
- B) It encrypts user inputs before they reach the database.  
- C) It restricts database access to administrators only.  
- D) It monitors the database for unauthorized modifications.  

**Answer:** A  

---

**Q: Why is it important to use least privilege principles for database accounts?**  
- A) To ensure all database operations are executed as an administrator.  
- B) To minimize the damage an attacker can cause if an account is compromised.  
- C) To allow dynamic creation of new tables during runtime.  
- D) To prevent multiple accounts from accessing the same data.  

**Answer:** B  

---

**Q: Which of the following SQL functions is most susceptible to injection attacks?**  
- A) CONCAT  
- B) GROUP BY  
- C) EXECUTE (dynamic SQL)  
- D) DISTINCT  

**Answer:** C  

---

**Q: What kind of input should developers avoid trusting to prevent SQL injection?**  
- A) Form data from authenticated users.  
- B) Parameters provided by the application code.  
- C) Any input that originates from external sources.  
- D) Data retrieved directly from the database.  

**Answer:** C  
