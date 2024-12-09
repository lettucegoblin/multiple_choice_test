# Unofficial Kahoot  

**Q: What does the SQL `SELECT *` command do?**  
- A) Deletes all rows in a table  
- B) Returns all columns from a table  
- C) Updates all rows in a table  
- D) Creates a new table  

**Answer:** B  

---  

**Q: What is the key purpose of using parameterized queries?**  
- A) To enhance query execution speed  
- B) To prevent SQL injection by separating data from code  
- C) To allow dynamic database schema changes  
- D) To increase compatibility with older database systems  

**Answer:** B  

---  

**Q: Why should input validation be done both client-side and server-side?**  
- A) To ensure faster application performance  
- B) To improve compatibility with browsers  
- C) To catch malicious inputs server-side and ensure a better user experience client-side  
- D) To avoid redundant checks in database queries  

**Answer:** C  

---  

**Q: What does the HTTP `POST` method typically do in web applications?**  
- A) Retrieves data from a server  
- B) Submits data to be processed by a server  
- C) Updates data on a web page  
- D) Deletes a resource from the server  

**Answer:** B  

---  

**Q: What is one drawback of using dynamic SQL?**  
- A) It cannot retrieve multiple rows from a table  
- B) It introduces security risks like SQL injection  
- C) It only works with specific database types  
- D) It prevents the use of stored procedures  

**Answer:** B  

---  

**Q: What is a UNION-based SQL injection attack?**  
- A) Modifying existing data in the database  
- B) Combining legitimate query results with malicious query results  
- C) Deleting multiple rows from a database  
- D) Executing a denial of service on the database  

**Answer:** B  

---  

**Q: What role does the database schema play in SQL injection?**  
- A) It restricts user access to certain queries  
- B) It provides the structure attackers may exploit during SQL injection  
- C) It encrypts data to prevent attacks  
- D) It blocks unauthorized access automatically  

**Answer:** B  

---  

**Q: Why is it a bad practice to display raw database error messages to users?**  
- A) It slows down the application  
- B) It can reveal sensitive database details to attackers  
- C) It reduces user trust in the system  
- D) It increases database storage requirements  

**Answer:** B  

---  

**Q: What does the SQL `DROP TABLE` command do?**  
- A) Deletes all rows in a table  
- B) Removes the table and its schema from the database  
- C) Creates a new table  
- D) Updates the structure of the table  

**Answer:** B  

---  

**Q: How can web developers prevent blind SQL injection attacks?**  
- A) Use CAPTCHA verification on login forms  
- B) Implement parameterized queries and avoid exposing error messages  
- C) Disable HTTPS encryption to inspect user requests  
- D) Log all user activities for later review  

**Answer:** B  

---  

**Q: What does an attacker achieve by exploiting error-based SQL injection?**  
- A) Executes additional malicious queries through an error response  
- B) Blocks user access to the database  
- C) Automatically encrypts query results  
- D) Generates random errors to confuse the database  

**Answer:** A  

---  

**Q: What is one characteristic of blind SQL injection?**  
- A) The attacker uses brute force to guess table names  
- B) The attacker receives no direct error messages but infers information from application behavior  
- C) It only targets databases with public access  
- D) It can only retrieve encrypted data  

**Answer:** B  

---  

**Q: Which SQL function can be used to concatenate strings in a SQL query?**  
- A) UNION  
- B) CONCAT  
- C) UPDATE  
- D) LIKE  

**Answer:** B  

---  

**Q: How does a tautology-based SQL injection attack work?**  
- A) By causing database queries to execute repeatedly until resources are exhausted  
- B) By injecting conditions that always evaluate to true, bypassing restrictions  
- C) By deleting all rows in a table with a single query  
- D) By exploiting poorly encrypted data  

**Answer:** B  

---  

**Q: Why is it important to restrict the permissions of database users?**  
- A) To prevent unauthorized schema changes by administrators  
- B) To limit the potential impact of a successful SQL injection attack  
- C) To encrypt data more efficiently  
- D) To allow dynamic generation of new SQL queries  

**Answer:** B  

---  

**Q: What is an indicator of SQL injection vulnerability in a web application?**  
- A) The application performs slowly under heavy traffic  
- B) Unexpected results when entering special characters in input fields  
- C) HTTP requests taking longer than normal to process  
- D) Random error messages unrelated to user actions  

**Answer:** B  

---  

**Q: Which SQL clause is used to filter rows returned by a query?**  
- A) SELECT  
- B) WHERE  
- C) FROM  
- D) JOIN  

**Answer:** B  

---

**Q: What does the `HAVING` clause do in a SQL query?**  
- A) Filters rows after grouping data  
- B) Specifies conditions for joining tables  
- C) Limits the number of rows returned  
- D) Deletes rows that do not meet criteria  

**Answer:** A  

---

**Q: Which SQL command creates a new table in a database?**  
- A) CREATE TABLE  
- B) INSERT INTO  
- C) UPDATE TABLE  
- D) SELECT INTO  

**Answer:** A  

---

**Q: What is the purpose of the `ORDER BY` clause in SQL?**  
- A) Filters records based on specific conditions  
- B) Combines data from multiple tables  
- C) Sorts the query results in ascending or descending order  
- D) Limits the number of records returned  

**Answer:** C  

---

**Q: How can you combine results from two SQL queries with similar columns?**  
- A) Using the `UNION` operator  
- B) Using the `GROUP BY` clause  
- C) Using the `WHERE` clause  
- D) Using the `ORDER BY` clause  

**Answer:** A  

---

**Q: In SQL injection, why is it dangerous to use `eval()` in query strings?**  
- A) It prevents efficient query execution  
- B) It directly executes user-provided input as SQL commands  
- C) It disables error reporting in the database  
- D) It encrypts user input automatically  

**Answer:** B  

---

**Q: Which SQL function is used to return the total number of rows in a query result?**  
- A) COUNT()  
- B) SUM()  
- C) AVG()  
- D) TOTAL()  

**Answer:** A  

---

**Q: What does a boolean-based blind SQL injection rely on?**  
- A) True or false responses to infer database information  
- B) Direct error messages to reveal database schema  
- C) Timing delays to extract sensitive data  
- D) Encryption of SQL queries for added security  

**Answer:** A  

---

**Q: What is the main characteristic of time-based blind SQL injection?**  
- A) The database's behavior changes based on the query's execution time.  
- B) The attacker manipulates query results to delay responses.  
- C) The attacker uses timing to encrypt SQL queries.  
- D) The query execution time is logged for auditing purposes.  

**Answer:** A  

---

**Q: How does the `LIKE` operator work in SQL?**  
- A) Filters records based on pattern matching  
- B) Joins two tables with common columns  
- C) Updates rows that meet a specific condition  
- D) Deletes rows from a database table  

**Answer:** A  

---

**Q: Why should error messages in web applications be suppressed for users?**  
- A) To reduce the application’s network traffic  
- B) To prevent attackers from gaining insights into the database structure  
- C) To improve page load times  
- D) To make debugging easier for developers  

**Answer:** B  

---

**Q: In SQL, what does the `DISTINCT` keyword do?**  
- A) Ensures no duplicate rows are returned in a query result  
- B) Joins tables with unique identifiers  
- C) Sorts query results in ascending order  
- D) Filters rows based on conditions  

**Answer:** A  

---

**Q: Which of the following is a key sign of a SQL injection vulnerability?**  
- A) Successful login with unusual input like `' OR '1'='1`  
- B) Pages loading slower than expected  
- C) Encrypted query results shown in browser logs  
- D) Automatic redirection to HTTPS  

**Answer:** A  

---

**Q: Why is the use of the `LIMIT` clause recommended in SQL queries?**  
- A) To enhance query readability  
- B) To restrict the number of rows processed, reducing attack surface  
- C) To enforce strict user authentication policies  
- D) To encrypt sensitive data during query execution  

**Answer:** B  

---

**Q: What is one way an attacker uses stacked queries in SQL injection?**  
- A) To execute multiple statements in a single query  
- B) To delete records without administrator knowledge  
- C) To encrypt malicious SQL queries  
- D) To bypass server-side validation entirely  

**Answer:** A  