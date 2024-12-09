# Module 7: Nmap Example Test

**Q: What is the primary function of Nmap?**  
- A) To create firewalls for a network  
- B) To scan and map a network's devices and services  
- C) To encrypt internet traffic  
- D) To provide web hosting services  

**Answer:** B  

---

**Q: What does the "open" status of a port indicate during an Nmap scan?**  
- A) The port is currently closed and unavailable.  
- B) The port is protected by a firewall.  
- C) The port is actively accepting connections.  
- D) The port has no defined protocol assigned.  

**Answer:** C  

---

**Q: Which of the following can Nmap detect about a target system?**  
- A) The operating system and services running on the target.  
- B) The hardware manufacturer of the network devices.  
- C) The physical location of the target system.  
- D) The target's internal company policies.  

**Answer:** A  

---

**Q: How does Nmap determine if a port is "filtered"?**  
- A) It detects that the port is responding to requests.  
- B) It receives no response, possibly due to firewall rules.  
- C) It identifies malware associated with the port.  
- D) It scans the port and finds a web application running.  

**Answer:** B  

---

**Q: Why is it critical to obtain proper authorization before using Nmap on a network?**  
- A) Unauthorized use of Nmap is illegal and may violate cybersecurity laws.  
- B) Nmap requires specialized hardware to operate legally.  
- C) Nmap usage is only allowed on open-source networks.  
- D) Nmap scans can permanently damage the network infrastructure.  

**Answer:** A  

---

**Q: What is the default protocol used by Nmap for scanning ports?**  
- A) UDP  
- B) FTP  
- C) HTTP  
- D) TCP  

**Answer:** D  

---

**Q: What is a valid reason to use Nmap's scripting engine (NSE)?**  
- A) To develop a website interface.  
- B) To automate network analysis and vulnerability detection.  
- C) To encrypt sensitive data in transit.  
- D) To replace the need for a firewall in a network.  

**Answer:** B  

---

**Q: What is the purpose of the `-p` option in Nmap?**  
- A) To specify the ports to scan.  
- B) To set the scanning speed.  
- C) To enable encrypted scans.  
- D) To save the scan results to a file.  

**Answer:** A  

---

**Q: Which type of scan in Nmap is considered the least intrusive?**  
- A) SYN scan  
- B) Connect scan  
- C) Null scan  
- D) Ping sweep  

**Answer:** D  

---

**Q: What is a critical step to follow when using Nmap in a penetration test?**  
- A) Scanning every IP address on the internet.  
- B) Documenting and reporting findings responsibly.  
- C) Avoiding scans on private networks.  
- D) Disabling firewall rules before scanning.  

**Answer:** B  

---

**Q: Which of the following represents the maximum number of ports available for scanning with Nmap?**  
- A) 256  
- B) 1024  
- C) 65535  
- D) Unlimited  

**Answer:** C  

---

**Q: What does the `-oN` option do in an Nmap command?**  
- A) Outputs results in XML format.  
- B) Saves the scan results in normal text format.  
- C) Opens a GUI for the scan results.  
- D) Specifies the network protocol to use during the scan.  

**Answer:** B  

---

**Q: What is one way Nmap can identify the operating system of a target?**  
- A) By analyzing the structure of returned HTTP responses.  
- B) By examining the TTL values and TCP window sizes in responses.  
- C) By decrypting secure communications from the target.  
- D) By requesting user credentials from the target.  

**Answer:** B  

---

**Q: Which of these is a potential risk of running Nmap scans without understanding the network environment?**  
- A) It could trigger intrusion detection systems (IDS).  
- B) It can cause hardware malfunctions in routers.  
- C) It may delete firewall configurations.  
- D) It disables the encryption of scanned traffic.  

**Answer:** A  

---

**Q: What does Nmap classify a port as if it responds with a "reset" (RST) packet during a TCP scan?**  
- A) Open  
- B) Closed  
- C) Filtered  
- D) Open|Filtered  

**Answer:** B  

---

**Q: How does a SYN scan differ from a full TCP connect scan in Nmap?**  
- A) A SYN scan completes the TCP three-way handshake.  
- B) A SYN scan only sends the initial SYN packet without completing the handshake.  
- C) A SYN scan requires administrator privileges, while a TCP connect scan does not.  
- D) A SYN scan is slower but provides more detailed results.  

**Answer:** B  

---

**Q: What is the primary use of the `-iL` option in Nmap?**  
- A) To load a list of target IPs or domains from a file.  
- B) To initiate a scan on the internal loopback address.  
- C) To increase the logging level of the scan.  
- D) To limit the scope of the scan to specific protocols.  

**Answer:** A  

---

**Q: In the Nmap output, what does "open|filtered" mean for a scanned port?**  
- A) The port is open and actively accepting connections.  
- B) The port is closed but blocked by a firewall.  
- C) Nmap cannot determine whether the port is open or filtered.  
- D) The port alternates between open and filtered states.  

**Answer:** C  

---

**Q: What is the safest environment to practice using Nmap commands?**  
- A) Any publicly accessible network.  
- B) A secured virtual machine or lab network where you have authorization.  
- C) A live corporate network without prior permission.  
- D) Any Wi-Fi network you can connect to.  

**Answer:** B  

---  

---

**Q: What is the `-sV` option used for in Nmap?**  
- A) To perform a basic ping sweep of the target network.  
- B) To determine the version of services running on open ports.  
- C) To scan only the vulnerable ports on a system.  
- D) To visualize the network topology.  

**Answer:** B  

---

**Q: Which of the following Nmap options is used to detect the operating system and software versions?**  
- A) `-O`  
- B) `-A`  
- C) `-sS`  
- D) `-v`  

**Answer:** A  

---

**Q: Which Nmap scan type is most likely to go undetected by a firewall?**  
- A) TCP Connect scan (`-sT`)  
- B) SYN Stealth scan (`-sS`)  
- C) UDP scan (`-sU`)  
- D) Null scan (`-sN`)  

**Answer:** D  

---

**Q: What is the role of Nmap's NSE (Nmap Scripting Engine)?**  
- A) It allows for basic network scanning only.  
- B) It enables advanced scanning techniques through customizable scripts.  
- C) It compiles Nmap into a standalone executable.  
- D) It replaces the need for traditional Nmap options.  

**Answer:** B  

---

**Q: In Nmap, what does the `-Pn` option do?**  
- A) Scans only public-facing network devices.  
- B) Disables host discovery (ping) and treats all hosts as online.  
- C) Enables parallel scanning across multiple IP ranges.  
- D) Prevents scans from interacting with filtered ports.  

**Answer:** B  

---

**Q: What should you include in a proper security assessment report after using Nmap?**  
- A) The personal details of network administrators.  
- B) The Nmap command history from your system.  
- C) A list of identified open ports, vulnerabilities, and remediation suggestions.  
- D) The physical layout of the network hardware.  

**Answer:** C  

---

**Q: Why might an Nmap scan show no results even when a system is online?**  
- A) The system has an outdated operating system.  
- B) A firewall or IDS is blocking the scan attempts.  
- C) The scan command was too complex to execute.  
- D) The Nmap tool is incompatible with modern networks.  

**Answer:** B  

---

**Q: What does the `-T4` option in Nmap adjust?**  
- A) The scan intensity and speed.  
- B) The number of ports scanned simultaneously.  
- C) The scan's target network range.  
- D) The transport protocol used for scanning.  

**Answer:** A  

---

**Q: What does Nmap use to identify the operating system of a host?**  
- A) DNS queries  
- B) TTL and TCP fingerprinting techniques  
- C) MAC address details  
- D) Hostnames and device names  

**Answer:** B  

---

**Q: How does Nmap differentiate between a closed port and a filtered port?**  
- A) Closed ports return no response, while filtered ports always return an error.  
- B) Closed ports actively refuse connections, while filtered ports block traffic via firewalls.  
- C) Closed ports show as open in scans, while filtered ports are hidden from scans.  
- D) Closed ports are ignored by Nmap, while filtered ports return duplicate packets.  

**Answer:** B  