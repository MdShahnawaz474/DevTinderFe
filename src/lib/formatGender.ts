export const formatGender = (gender: string): string => {
  switch (gender.toLowerCase()) {
    case 'male':
      return 'Male';
    case 'female':
      return 'Female';
    case 'others':
    case 'other':
      return 'Others';
    default:
      return gender;
  }
};