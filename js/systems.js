// ============================================================
// YOUR SYSTEMS CATALOG - edit this file to add or change systems.
// The hero preview and the catalog cards both read from here.
// ============================================================
const WHATSAPP = "254728440292"; // no + sign, no spaces

const SYSTEMS = [
  {
    id: "pos",
    name: "Vuqa POS",
    category: "Retail & Sales",
    description:
      "A user-friendly Point of Sale solution that streamlines sales, inventory management, payments, and business reporting in one system.",
    features: ["Sales & receipts", "Inventory control", "Payments", "Business reports"],
    preview: [
      ["Today's sales", "KES 48,250"],
      ["Items low on stock", "7"],
      ["M-Pesa payments", "62%"],
    ],
  },
  {
    id: "lending",
    name: "Vuqa Lending",
    category: "Finance & SACCOs",
    description:
      "A web-based lending management system that brings member records, savings, loans, transactions, and reporting together in one easy-to-use and secure platform.",
    features: ["Member records", "Savings & loans", "Transactions", "Reports"],
    preview: [
      ["Active loans", "214"],
      ["Member savings", "KES 3.2M"],
      ["Repayments due this week", "38"],
    ],
  },
  {
    id: "shule",
    name: "Vuqa Shule",
    category: "Education",
    description:
      "A School Management System designed to streamline student records, admissions, timetabling, assessments, fees, academic reporting, and human resource services in one platform.",
    features: ["Admissions", "Timetabling", "Fees & assessments", "HR services"],
    preview: [
      ["Students enrolled", "842"],
      ["Fees collected this term", "86%"],
      ["Report cards ready", "12 of 14 classes"],
    ],
  },
];
