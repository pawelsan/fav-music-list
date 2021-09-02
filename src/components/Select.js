import i18n from "i18next";

export const Select = () => {
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select name="languages" onChange={handleChange}>
      <option value="pl">PL</option>
      <option value="en">EN</option>
    </select>
  );
};
