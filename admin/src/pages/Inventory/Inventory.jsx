import{useState} from 'react'
import React from 'react'
import Products from '../../components/InventoryComp/Products'


function InventoryRequest() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='wrapContent'>
      <RequestTable openModal={() => { setModalOpen(true); }} />
      {modalOpen && <InventoryModal closeModal={() => { setModalOpen(false); }} />}
    </div>
  );
}

export default InventoryRequest