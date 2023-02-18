import React, { useEffect , useState } from "react";
import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileWaveform} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState<string>('My Website');

  useEffect(() => {
    const newPageTitle = getPageTitle(location.pathname);
    setPageTitle(newPageTitle);
    document.title = newPageTitle;
  }, [location]);

  function getPageTitle(pageName: string): string {
    switch (pageName) {
      case '/':
        return 'Home';
      case '/goals':
        return 'Goals';
      case '/foodDiary':
        return 'Food Dairy';
      case '/login':
        return 'Login';
      case '/register':
        return 'Register';
      case '/addGoal':
        return 'Add Goal';
      default:
        return 'FitnessTracker';
    }
  }
  return (
    // changes header based on which page yu are on
    <div className="mx-5 my-5 flex">
      <FontAwesomeIcon icon={faFileWaveform} className="fa-3x"/>
      <h1 className="mx-6 text-4xl">Fitness Tracker</h1>
      <h1 className="text-xl text-gray-500">{pageTitle}</h1>
    </div>
  );
};

export default Header;
