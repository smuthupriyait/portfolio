// ============ EDIT YOUR LINKS HERE ============
// Buttons whose link is "" are hidden automatically, so nothing shows as "coming soon".
export const links = {
  github: "https://github.com/smuthupriyait",
  linkedin: "https://www.linkedin.com/in/muthupriya-sa215b4110",
  email: "smuthupriyait@gmail.com",
  ragRepo: "https://github.com/smuthupriyait/personal-rag-ai-assistant",
  ragDemo: "",          // no live demo yet: button is hidden until you add a URL
  ragArchitecture: "https://github.com/smuthupriyait/personal-rag-ai-assistant#project-overview",
  ragCaseStudy: "",     // optional write-up URL: hidden until added
  bankingRepo: "https://github.com/smuthupriyait/Test-Automation-banking-ML",
  dataMining: "https://github.com/smuthupriyait/Data-mining_Projects",
  bigData: "https://github.com/smuthupriyait/Big-data--projects",
  cv: "Muthupriya_Shankaran_AI_Engineer.pdf",
};
// ==============================================

export const facts = [
  ["5+ years in IT", "Python, SQL, REST APIs, data processing and machine learning"],
  ["Master's in Artificial Intelligence", "Stockholm University"],
  ["Currently pursuing", "Master's in Interaction Design for Artificial Realities, Stockholm University"],
  ["Built a RAG assistant", "Retrieval, sources, evaluation and fallback handling. Code available on GitHub"],
];

export const pipeline = [
  ["Company documents", "Plain-text employee handbook, IT support policy and leave policy"],
  ["Document loading", "Load the local .txt files"],
  ["Section-based chunking", "Split by document section rather than fixed-size pieces"],
  ["Sentence Transformer embeddings", "all-MiniLM-L6-v2 turns each chunk into a vector"],
  ["FAISS vector store", "Stores the vectors for similarity search"],
  ["User question + query embedding", "The question is embedded the same way"],
  ["Semantic retrieval", "Nearest chunks returned with filename, section and distance"],
  ["Distance threshold", "Weakly related chunks (distance above 1.2) are not passed on"],
  ["Retrieved context", "Only the retrieved sections reach the model"],
  ["Ollama LLM generation", "Local model (qwen2.5:1.5b) answers using only that context"],
  ["Answer + source", "The answer is shown with its source file and section"],
];

export const results = [
  ["Retrieval, top-1", "10/10"],
  ["Retrieval, top-3", "10/10"],
  ["Generation, key information", "10/10"],
  ["Unsupported questions handled", "4/4"],
  ["End-to-end regression", "6/6"],
];

export const caseStudy = [
  ["Problem", "Employees need quick answers from long internal documents such as leave and IT policies. A plain LLM can answer confidently without using the company's actual text."],
  ["Why RAG", "Retrieval keeps answers tied to the source documents and lets the assistant show where an answer came from. Updating the knowledge base means changing documents, not retraining a model."],
  ["Retrieval approach", "Documents are split into sections, embedded with a Sentence Transformer model and indexed in FAISS. Each result carries its filename, section, content and vector distance. A distance threshold of 1.2, checked against the project's retrieval test questions, stops weakly related chunks reaching the model."],
  ["Generation", "A local Ollama model receives the question and the retrieved context. The prompt tells it to use only that context, avoid adding information, and say so when the documents do not contain the answer."],
  ["Evaluation", "Separate scripts test retrieval, generation, unsupported questions, the threshold and end-to-end behaviour, so a bad answer can be traced to retrieval or generation. The test sets are small (4 to 10 questions each): they show the pipeline works as designed, not that it would hold at production scale."],
  ["Source reliability", "Every answer is shown with the source file and section it came from, so it can be checked against the original document."],
  ["Fallback handling", "Unsupported questions are tested to confirm the assistant does not invent answers. If the LLM is unavailable, the error is logged and the user gets a friendly fallback message instead of a crash."],
  ["Security and configuration", "The model name is set through environment variables in .env, which is excluded from Git along with the virtual environment and the local vector store. No API keys or credentials are in the source code."],
  ["Current limitations and next steps", "This is a local prototype: text-file sources, a local FAISS store, local Ollama inference, a command-line interface, basic logging and no authentication. A user interface, a larger evaluation set, more retrieval experiments and deployment considerations are planned next."],
];

export const projects = [
  {
    title: "Banking UI automation + fraud-detection API",
    stack: "Python, Playwright, pytest, Flask",
    text: "A Playwright/pytest UI and API automation project built around a Flask-based machine-learning fraud-detection API. The model returns 1 for fraud and 0 for not fraud. Tests validate transaction data, API behaviour and model predictions end to end.",
    note: "A test-automation exercise around a small ML API, not a production fraud system.",
    link: ["bankingRepo", "View repository"],
  },
  {
    title: "Data mining and big data projects (Master's)",
    stack: "Python, Jupyter, Pandas, NumPy",
    text: "Data preprocessing, feature engineering, machine-learning model training and evaluation, plus distributed data-processing exercises completed during my Master's in Artificial Intelligence.",
    link: ["dataMining", "Data mining repo"],
    link2: ["bigData", "Big data repo"],
  },
  {
    title: "Master's thesis: Acceptance of socially assistive robots among elderly users",
    stack: "Survey research, SPSS, SPSS Amos",
    text: "Survey-based quantitative research using regression analysis and model fitness testing.",
  },
];

export const experience = [
  ["Solution Developer Intern", "TalentRiver", "Stockholm", "Aug 2025 – Jan 2026", [
    "Developed automated data-validation solutions for a data-driven recruitment platform and its integrations with external ATS systems.",
    "Used SQL/PostgreSQL to compare data across systems and find inconsistencies, missing data and synchronisation issues.",
    "Developed API-level validation for REST services and worked with developers to improve test coverage and reliability."]],
  ["Data Management Intern", "World Sports Group", "Stockholm", "Mar 2024 – Aug 2024", [
    "Validated data across multiple platforms, identifying mismatches, missing fields and data-quality issues.",
    "Tested rule-based content classification and verified data integrity across downstream workflows.",
    "Designed functional and regression scenarios for data and content pipelines during system changes."]],
  ["Data Analyst Intern", "Odyssey", "Stockholm", "Sep 2022 – Jan 2023", [
    "Automated survey and data-collection workflows using Python, reducing manual processing.",
    "Queried and validated datasets in GCP BigQuery using SQL and supported data-quality checks for downstream reporting.",
    "Supported ETL and data-migration activities by reconciling source and target data."]],
  ["Technical Tester", "Toteme (via Techlove)", "Stockholm", "May 2022 – Jun 2022", [
    "Performed front-end, back-end and API testing using Postman and Azure DevOps, working with developers to identify and resolve defects."]],
  ["Support & QA Engineer", "Test99", "Remote", "Aug 2016 – Jun 2018", [
    "Tested web and desktop applications through functional, exploratory and regression testing.",
    "Automated repetitive test scenarios using Selenium WebDriver and TestNG."]],
  ["Middleware Engineer", "Tata Consultancy Services (client: Deutsche Bank)", "Bangalore", "Jun 2015 – Mar 2016", [
    "Worked on web SSO authentication and 2FA API integration in a financial-services environment.",
    "Developed and maintained automated build and deployment jobs using Jenkins and Maven.",
    "Used SQL for backend validation and investigated database and integration issues."]],
  ["Software Engineer", "SME Software", "Salem", "Jun 2013 – Mar 2015", [
    "Developed internal application components using Core Java and SQL.",
    "Built Selenium WebDriver/TestNG automation and performed JMeter testing to validate application functionality and performance."]],
];

export const education = [
  ["Master's in Interaction Design for Artificial Realities", "Stockholm University · 2026 – Present", "120 credits, 2-year programme. Focus: interaction design, human-computer interaction, artificial realities and human-centered technology."],
  ["Master's in Artificial Intelligence", "Stockholm University · 2021 – 2022", "Thesis: Acceptance of socially assistive robots among elderly users."],
  ["B.Tech in Information Technology", "India · 2009 – 2013", ""],
];
export const certifications = [
  "Google Cloud Professional Data Engineer",
  "ISTQB Certified Tester, Foundation Level (CTFL)",
  "Oracle Certified Associate (OCA)",
  "Swedish · Grund 3 completed",
];
export const languages = [
  ["English", "Professional proficiency"],
  ["Swedish", "Intermediate"],
  ["Tamil", "Native"],
];

export const skills = [
  ["AI and LLM", "RAG, LLM application development, prompt design, document retrieval, vector search (FAISS), Sentence Transformers, local LLM inference (Ollama), AI evaluation, machine learning"],
  ["Python and data", "Python, Pandas, NumPy, SQL, PostgreSQL, data validation, ETL, GCP BigQuery"],
  ["APIs and backend", "REST APIs, API integration and validation, Flask, FastAPI, Postman, ReadyAPI"],
  ["Testing and reliability", "Automated, regression and integration testing, Selenium, Playwright, pytest, TestNG, JMeter"],
  ["Tools", "GCP, Git, Jenkins, Azure DevOps, Jira, Jupyter, VS Code"],
];

// Optional: put a real screenshot of the app in /public and set the file name, e.g. "rag-screenshot.png".
// While empty, the project section shows the real example run from your README instead.
export const screenshot = "";
export const screenshotAlt = "Screenshot of the RAG assistant answering a leave policy question with its source";
export const stack = ["Python", "Sentence Transformers (all-MiniLM-L6-v2)", "FAISS", "Ollama (qwen2.5:1.5b)", "NumPy", "python-dotenv"];
