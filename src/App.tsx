import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";


Modal.setAppElement('#root'); // renderiza o modal para o elemento root do HTML
export function App() {

  // State para controlar o modal de nova transação
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  // Função para abrir o modal de nova transação
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  // Função para fechar o modal de nova transação
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </>
  );
}
