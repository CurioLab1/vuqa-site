// ============================================================
// YOUR SYSTEMS CATALOG - edit this file to add or change systems.
// Photos: put a file named  images/<id>.jpg  (e.g. images/pos.jpg)
// ============================================================
const WHATSAPP = "254728440292"; // no + sign, no spaces
const EMAIL = "vuqasystems@gmail.com";

const SYSTEMS = [
  {
    id: "pos",
    name: "Vuqa POS",
    category: "Retail & Sales",
    headline: "Run every sale. Count every shilling.",
    sub: "Sales, stock, payments and reports in one simple system for shops and businesses.",
    description:
      "A user-friendly Point of Sale solution that streamlines sales, inventory management, payments, and business reporting in one system.",
    features: ["Sales & receipts", "Inventory control", "Payments", "Business reports"],
    preview: [["Today's sales", "KES 48,250"], ["Items low on stock", "7"], ["M-Pesa payments", "62%"]],
  },
  {
    id: "lending",
    name: "Vuqa Lending",
    category: "Finance & SACCOs",
    headline: "Every member. Every loan. Every repayment.",
    sub: "A secure platform that keeps savings, loans and reporting in one place for lenders and SACCOs.",
    description:
      "A web-based lending management system that brings member records, savings, loans, transactions, and reporting together in one easy-to-use and secure platform.",
    features: ["Member records", "Savings & loans", "Transactions", "Reports"],
    preview: [["Active loans", "214"], ["Member savings", "KES 3.2M"], ["Repayments due this week", "38"]],
  },
  {
    id: "shule",
    name: "Vuqa Shule",
    category: "Education",
    headline: "One platform for the whole school.",
    sub: "Admissions, timetables, fees, assessments and report cards, without the paperwork pile.",
    description:
      "A School Management System designed to streamline student records, admissions, timetabling, assessments, fees, academic reporting, and human resource services in one platform.",
    features: ["Admissions", "Timetabling", "Fees & assessments", "HR services"],
    preview: [["Students enrolled", "842"], ["Fees collected this term", "86%"], ["Report cards ready", "12 of 14 classes"]],
  },
];
