# ATS Resume Matcher

**A powerful and easy-to-use tool for evaluating how well your resume aligns with a specific job description.** This tool helps you optimize your resume to pass through Applicant Tracking Systems (**ATS**), which are used by most companies to screen candidates. The tool gives you an **ATS match score**, identifies keywords you might be missing, and offers general suggestions for improvement.

-----
<p align="right">
  <img src="https://cdn.dribbble.com/userupload/24303321/file/original-58c3a262a1e19a2fa175dd27e0830388.gif" width="40%" height="160" />
</p>

### ✨ Features


  * **ATS Match Score**: Calculates a percentage-based score indicating the level of alignment between your resume and a job description.
  * **Keyword Analysis**: Compares keywords from your resume with those from the job description and highlights the skills you should consider adding. 🔍
  * **General Resume Health Check**: If you don't have a specific job description, the tool can perform a general review of your resume, checking for grammar and spelling, and providing tips on structure and formatting. ✅
  * **Action Verb & Quantifiable Results Check**: Analyzes the language in your resume to suggest stronger action verbs and the inclusion of quantifiable metrics to demonstrate impact. 💪
  * **Visualization**: Generates a bar chart to visually represent your **ATS score**, making it easy to understand where you stand. 📊
  * **Supports PDF and DOCX**: The tool can extract text from both PDF and DOCX file formats. 📁

-----

### 💻 How to Run in Google Colab

The easiest way to use this project is through Google Colab, a free online environment that requires no local setup. Just follow these steps:

#### Step 1: Open the Notebook

Click the "Open in Colab" badge below to open the notebook directly in your browser.

[](https://colab.research.google.com/github/Satish-970/ATS_Checker_Job-Description/blob/main/ATS.ipynb)

#### Step 2: Install Dependencies

Once the notebook is open, click on the first code cell and press the "Play" button (or `Shift + Enter`) to install all the necessary **Python libraries** like `spaCy`, `PyPDF2`, and `language-tool-python`. This may take a few moments.

*A screenshot of the Colab output showing dependencies being installed would go here.*

#### Step 3: Define Functions

Run the second code cell. This cell defines all the core functions for text extraction, keyword analysis, grammar checking, and score calculation. You'll see a confirmation message once it's complete.

#### Step 4: Run the ATS Checker


Execute the third and final code cell. You will be prompted to:

  * **Upload your resume**: A file dialog will appear, allowing you to select your resume (PDF or DOCX) from your computer. 📂
  * **Paste the job description**: A text box will appear. You can either paste a job description for a detailed **ATS analysis** or leave it blank to get a general resume health check. 📋

#### Step 5: Review the Results

After providing your input, the tool will process your resume and display a comprehensive report right in the Colab notebook. The report includes your **ATS score**, keyword matching details, and personalized suggestions for improvement.

-----

### 🛠️ Technical Details

The project uses several key **Python libraries** to function:

  * **`PyPDF2` & `python-docx`**: These libraries handle the text extraction from your uploaded resume files.
  * **`spaCy`**: A powerful NLP (Natural Language Processing) library used for tokenization and part-of-speech tagging to intelligently identify important keywords.
  * **`scikit-learn`**: The `TfidfVectorizer` and `cosine_similarity` modules are used to convert text into numerical vectors and calculate the similarity score between your resume and the job description.
  * **`language-tool-python`**: This library is integrated for performing a thorough grammar and spelling check on your resume.
  * **`Matplotlib`**: Used to generate the visualization of your **ATS score**, giving you a clear visual overview of your results.
