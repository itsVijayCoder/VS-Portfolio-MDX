export const setLocalStorage = (key: string, value: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(key, value);
};
export const getLocalStorage = (key: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  return window.localStorage.getItem(key);
};
export const removeLocalStorage = (key: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(key);
};
export const clearLocalStorage = () => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.clear();
};

// User data keys
export const USER_NAME_KEY = 'userName';
export const TEAM_NAME_KEY = 'teamName';
export const USER_ROLE_KEY = 'userRole';

export const setUserData = (userData: {
  name: string;
  role: string;
  team: { name: string };
}) => {
  if (typeof window === 'undefined') {
    return;
  }

  setLocalStorage(USER_NAME_KEY, userData.name);
  setLocalStorage(TEAM_NAME_KEY, userData.team.name);
  setLocalStorage(USER_ROLE_KEY, userData.role);
};

export const getUserData = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return {
    name: getLocalStorage(USER_NAME_KEY),
    teamName: getLocalStorage(TEAM_NAME_KEY),
    role: getLocalStorage(USER_ROLE_KEY),
  };
};

export const clearUserData = () => {
  if (typeof window === 'undefined') {
    return;
  }

  removeLocalStorage(USER_NAME_KEY);
  removeLocalStorage(TEAM_NAME_KEY);
  removeLocalStorage(USER_ROLE_KEY);
};
