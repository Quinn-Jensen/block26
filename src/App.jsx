import React, { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <>
      {selectedContact ? (
        <div>
          <div>Selected Contact View</div>
        <SelectedContact contact = {selectedContact}/>
          </div>
      ) : (
        <ContactList setSelectedContact={setSelectedContact} />
      )}
    </>
  );
}
