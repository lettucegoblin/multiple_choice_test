// File: Quiz7_Selectors_Pseudo.md
# Quiz 7: Advanced Selectors & Pseudo-features

**Q: Which selector matches all `<input>` elements that are disabled?**  
- A) `input:disabled`  
- B) `input[disabled]`  
- C) Both A and B  
- D) `input.disabled`  

**Answer:** C  

---  

**Q: What does the child combinator `>` do?**  
- A) Selects direct children only  
- B) Selects all descendants  
- C) Selects siblings only  
- D) Selects elements with greater specificity  

**Answer:** A  

---  

**Q: Which selector matches the first `<li>` in every list?**  
- A) `li:first-child`  
- B) `li:nth-of-type(1)`  
- C) `li::first-line`  
- D) `li:first-type`  

**Answer:** A  

---  

**Q: To target only `<p>` elements immediately preceded by an `<h2>`, use:**  
- A) `h2 + p`  
- B) `h2 ~ p`  
- C) `h2 > p`  
- D) `h2 p`  

**Answer:** A  

---  

**Q: The attribute selector `[href^="https"]` matches links whose `href`:**  
- A) Ends with “https”  
- B) Contains “https” anywhere  
- C) Begins with “https”  
- D) Exactly equals “https”  

**Answer:** C  

---  

**Q: Which pseudo-element styles the first line of a paragraph?**  
- A) `p:first-line`  
- B) `p::first-line`  
- C) `p:first-letter`  
- D) `p::first-letter`  

**Answer:** B  

---  

**Q: `:not(.active)` selects elements that:**  
- A) Have the class “active”  
- B) Don’t have the class “active”  
- C) Are named “not” or have class “active”  
- D) Only input elements  

**Answer:** B  

---  

**Q: Which selector matches every third list item (3, 6, 9…)?**  
- A) `li:nth-child(3n)`  
- B) `li:nth-of-type(3)`  
- C) `li:every(3)`  
- D) `li:nth-child(odd)`  

**Answer:** A  

---  

**Q: To style links only when they have been visited, use:**  
- A) `a:link`  
- B) `a:visited`  
- C) `a:hover`  
- D) `a:active`  

**Answer:** B  

---  

**Q: The pseudo-class `:checked` applies to:**  
- A) Every selected option in a `<select>`  
- B) A radio or checkbox that is checked  
- C) A visited link  
- D) An element with `aria-checked="true"`  

**Answer:** B  
