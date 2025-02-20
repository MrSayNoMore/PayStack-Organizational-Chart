// Modal Functionality
function showResponsibility(role) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalRole = document.getElementById('modal-role');

  modalTitle.textContent = role;
  modalRole.textContent = `Responsibilities for ${role}:`;

 // Example responsibilities
let responsibilities = '';
switch (role) {
    case 'CEO':
        responsibilities = 'Oversees the entire organization, sets strategic goals, and ensures company growth.';
        break;
    case 'CTO':
        responsibilities = 'Leads technology strategy, product development, and engineering teams.';
        break;
    case 'COO':
        responsibilities = 'Manages daily operations, customer support, and compliance.';
        break;
    case 'CFO':
        responsibilities = 'Handles financial planning, accounting, and partnerships.';
        break;
    case 'Head of Data Analytics':
        responsibilities = 'Leads the data analytics team, develops analytical strategies, and ensures effective data utilization to drive business insights and decisions.';
        break;
    case 'Product Development':
        responsibilities = 'Responsible for developing new products and managing the product lifecycle.';
        break;
    case 'Engineering Team':
        responsibilities = 'Designs and builds the company’s technology and software solutions.';
        break;
    case 'Customer Support':
        responsibilities = 'Provides assistance and support to customers, ensuring satisfaction and retention.';
        break;
    case 'Operations':
        responsibilities = 'Oversees the day-to-day operations and processes of the company.';
        break;
    case 'Compliance':
        responsibilities = 'Ensures adherence to laws, regulations, and internal policies.';
        break;
    case 'Finance Team':
        responsibilities = 'Manages financial reporting, budgeting, and financial analysis.';
        break;
    case 'Accounting Team':
        responsibilities = 'Responsible for maintaining financial records and preparing financial statements.';
        break;
    case 'Partnership Teams':
        responsibilities = 'Develops and maintains relationships with business partners and stakeholders.';
        break;
    case 'Data Scientist':
        responsibilities = 'Analyzes complex data sets to inform business decisions and strategy.';
        break;
    case 'Business Analyst':
        responsibilities = 'Identifies business needs and provides solutions to improve processes.';
        break;
    case 'Frontend Team':
        responsibilities = 'Develops the user interface and user experience of applications.';
        break;
    case 'Backend Team':
        responsibilities = 'Manages server-side application logic and database interactions.';
        break;
    case 'DevOps Team':
        responsibilities = 'Coordinates software development and IT operations for continuous delivery.';
        break;
    case 'Support Agents':
        responsibilities = 'Assists customers with inquiries and issues through various channels.';
        break;
    case 'Logistics Team':
        responsibilities = 'Manages the supply chain, distribution, and delivery of products.';
        break;
    case 'Audit Team':
        responsibilities = 'Conducts audits to ensure compliance and financial accuracy.';
        break;
    case 'Payroll Team':
        responsibilities = 'Handles employee compensation and payroll processing.';
        break;
    case 'Vendor Management':
        responsibilities = 'Manages relationships with suppliers and oversees procurement processes.';
        break;
    case 'Machine Learning':
        responsibilities = 'Develops algorithms and models to enable machine learning applications.';
        break;
    case 'Data Visualization':
        responsibilities = 'Creates visual representations of data to help stakeholders understand insights.';
        break;
    default:
        responsibilities = 'No additional information available.';
}

  modalRole.textContent += ` ${responsibilities}`;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Function to draw connecting lines
function drawConnectingLines() {
  const svg = document.querySelector('.connector');
  svg.innerHTML = ''; // Clear existing lines

  // Function to get the center position of a node
  function getCenterPosition(node) {
      const rect = node.getBoundingClientRect();
      return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
      };
  }

  // Level 1: CEO
  const ceo = document.getElementById('ceo');
  const ceoPos = getCenterPosition(ceo);

  // Level 2: Executives
  const cto = document.getElementById('cto');
  const coo = document.getElementById('coo');
  const cfo = document.getElementById('cfo');
  const headData = document.getElementById('head-data');

  const ctoPos = getCenterPosition(cto);
  const cooPos = getCenterPosition(coo);
  const cfoPos = getCenterPosition(cfo);
  const headDataPos = getCenterPosition(headData);

  // Level 3: Teams
  const productDev = document.getElementById('product-dev');
  const engineering = document.getElementById('engineering');
  const customerSupport = document.getElementById('customer-support');
  const operations = document.getElementById('operations');
  const compliance = document.getElementById('compliance');
  const finance = document.getElementById('finance');
  const accounting = document.getElementById('accounting');
  const partnership = document.getElementById('partnership');
  const dataScientist = document.getElementById('data-scientist');
  const businessAnalyst = document.getElementById('business-analyst');

  const productDevPos = getCenterPosition(productDev);
  const engineeringPos = getCenterPosition(engineering);
  const customerSupportPos = getCenterPosition(customerSupport);
  const operationsPos = getCenterPosition(operations);
  const compliancePos = getCenterPosition(compliance);
  const financePos = getCenterPosition(finance);
  const accountingPos = getCenterPosition(accounting);
  const partnershipPos = getCenterPosition(partnership);
  const dataScientistPos = getCenterPosition(dataScientist);
  const businessAnalystPos = getCenterPosition(businessAnalyst);

  // Level 4: Sub-Teams
  const frontend = document.getElementById('frontend');
  const backend = document.getElementById('backend');
  const devops = document.getElementById('devops');
  const supportAgents = document.getElementById('support-agents');
  const logistics = document.getElementById('logistics');
  const audit = document.getElementById('audit');
  const payroll = document.getElementById('payroll');
  const vendorManagement = document.getElementById('vendor-management');
  const machineLearning = document.getElementById('machine-learning');
  const dataVisualization = document.getElementById('data-visualization');

  const frontendPos = getCenterPosition(frontend);
  const backendPos = getCenterPosition(backend);
  const devopsPos = getCenterPosition(devops);
  const supportAgentsPos = getCenterPosition(supportAgents);
  const logisticsPos = getCenterPosition(logistics);
  const auditPos = getCenterPosition(audit);
  const payrollPos = getCenterPosition(payroll);
  const vendorManagementPos = getCenterPosition(vendorManagement);
  const machineLearningPos = getCenterPosition(machineLearning);
  const dataVisualizationPos = getCenterPosition(dataVisualization);

  // Function to draw a line between two nodes
  function drawLine(x1, y1, x2, y2, color) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', x1);
      line.setAttribute('y1', y1);
      line.setAttribute('x2', x2);
      line.setAttribute('y2', y2);
      line.setAttribute('stroke', color);
      line.setAttribute('stroke-width', '2');
      svg.appendChild(line);
  }

  // Draw lines from CEO to Level 2 (Executives)
  drawLine(ceoPos.x, ceoPos.y, ctoPos.x, ctoPos.y, '#0072ff'); // CEO → CTO
  drawLine(ceoPos.x, ceoPos.y, cooPos.x, cooPos.y, '#0072ff'); // CEO → COO
  drawLine(ceoPos.x, ceoPos.y, cfoPos.x, cfoPos.y, '#0072ff'); // CEO → CFO
  drawLine(ceoPos.x, ceoPos.y, headDataPos.x, headDataPos.y, '#0072ff'); // CEO → Head of Data Analytics

  // Draw lines from Level 2 (Executives) to Level 3 (Teams)
  drawLine(ctoPos.x, ctoPos.y, productDevPos.x, productDevPos.y, '#6e48aa'); // CTO → Product Development
  drawLine(ctoPos.x, ctoPos.y, engineeringPos.x, engineeringPos.y, '#6e48aa'); // CTO → Engineering Team

  drawLine(cooPos.x, cooPos.y, customerSupportPos.x, customerSupportPos.y, '#ff9a9e'); // COO → Customer Support
  drawLine(cooPos.x, cooPos.y, operationsPos.x, operationsPos.y, '#ff9a9e'); // COO → Operations
  drawLine(cooPos.x, cooPos.y, compliancePos.x, compliancePos.y, '#ff9a9e'); // COO → Compliance

  drawLine(cfoPos.x, cfoPos.y, financePos.x, financePos.y, '#a18cd1'); // CFO → Finance Team
  drawLine(cfoPos.x, cfoPos.y, accountingPos.x, accountingPos.y, '#a18cd1'); // CFO → Accounting Team
  drawLine(cfoPos.x, cfoPos.y, partnershipPos.x, partnershipPos.y, '#a18cd1'); // CFO → Partnership Teams

  drawLine(headDataPos.x, headDataPos.y, dataScientistPos.x, dataScientistPos.y, '#fbc2eb'); // Head of Data Analytics → Data Scientist
  drawLine(headDataPos.x, headDataPos.y, businessAnalystPos.x, businessAnalystPos.y, '#fbc2eb'); // Head of Data Analytics → Business Analyst

  // Draw lines from Level 3 (Teams) to Level 4 (Sub-Teams)
  drawLine(productDevPos.x, productDevPos.y, frontendPos.x, frontendPos.y, '#6e48aa'); // Product Development → Frontend Team
  drawLine(productDevPos.x, productDevPos.y, backendPos.x, backendPos.y, '#6e48aa'); // Product Development → Backend Team

  drawLine(engineeringPos.x, engineeringPos.y, devopsPos.x, devopsPos.y, '#6e48aa'); // Engineering Team → DevOps Team

  drawLine(customerSupportPos.x, customerSupportPos.y, supportAgentsPos.x, supportAgentsPos.y, '#ff9a9e'); // Customer Support → Support Agents

  drawLine(operationsPos.x, operationsPos.y, logisticsPos.x, logisticsPos.y, '#ff9a9e'); // Operations → Logistics Team

  drawLine(compliancePos.x, compliancePos.y, auditPos.x, auditPos.y, '#ff9a9e'); // Compliance → Audit Team

  drawLine(financePos.x, financePos.y, payrollPos.x, payrollPos.y, '#a18cd1'); // Finance Team → Payroll Team

  drawLine(accountingPos.x, accountingPos.y, vendorManagementPos.x, vendorManagementPos.y, '#a18cd1'); // Accounting Team → Vendor Management

  drawLine(dataScientistPos.x, dataScientistPos.y, machineLearningPos.x, machineLearningPos.y, '#fbc2eb'); // Data Scientist → Machine Learning
  drawLine(businessAnalystPos.x, businessAnalystPos.y, dataVisualizationPos.x, dataVisualizationPos.y, '#fbc2eb'); // Business Analyst → Data Visualization
}

// Draw lines when the page loads
window.addEventListener('load', drawConnectingLines);

// Redraw lines when the window is resized
window.addEventListener('resize', drawConnectingLines);
