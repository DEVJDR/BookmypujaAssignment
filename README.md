# Responsive Design using Tailwind CSS and Framer Motion

This project is a responsive webpage built using **React**, **Tailwind CSS**, and **Framer Motion**. The webpage includes a header, a popup modal for contact details, and a footer with expandable functionality.

---

## **Features**

- **Responsive Design**: Utilizes Tailwind CSS for styling and ensures compatibility across devices.
- **Animations**: Includes smooth animations using Framer Motion.
- **Interactive Footer**: Footer can expand or collapse to reveal hidden content.
- **Popup Modal**: A contact form modal can be triggered for user input.

---

## **Technologies Used**

- React
- Tailwind CSS
- Framer Motion

---

## **Setup and Installation**

### Prerequisites


- npm or yarn

### Steps to Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Tailwind CSS**

   Tailwind is already configured in this project, but here’s how it works:

   - The configuration file `tailwind.config.js` is used to customize the design.
   - The Tailwind directives in `src/index.css` ensure styles are applied.

4. **Run the Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```

   

5. **Build for Production**
   To create a production build, run:
   ```bash
   npm run build
   # or
   yarn build
   ```

---

## **Folder Structure**

```
project-folder/
├── public/
├── src/
│   ├── components/
│   │   ├── FooterButton.jsx
│   │   ├── HomeIcon.jsx
│   │   ├── PopupModal.jsx
│   └── App.jsx
│   └── index.css
│   └── index.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## **Components**

### **1. FooterButton**
- A footer with expandable/collapsible functionality.
- Uses **Framer Motion** for smooth animations.

### **2. HomeIcon**
- A clickable home icon to trigger the popup modal.

### **3. PopupModal**
- Displays a contact form with fields for name, email, and phone number.
- Includes a close button to dismiss the modal.

---


