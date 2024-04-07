## materials ui icons:

- npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

## making a dropdown on hover (./components/navbar/Navbar.jsx)

```
<div className="group cursor-pointer">
    <ArrowDropDown />
    <div className="options absolute hidden cursor-pointer p-3 rounded-lg bg-black group-hover:flex flex-col gap-3">
        <span>Settings</span>
        <span>Logout</span>
        <span>Preferences</span>
    </div>
</div>
```

## navbar.jsx changing the color of Nvabar.jsx when scrolled
```
window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);  //the cleanup function sets window.onscroll to null, effectively removing the event handler. This helps avoid memory leaks or unexpected behavior when the component is no longer in use.
    // console.log(isSCrolled);
    // console.log(window.scrollX, window.scrollY);
  };
```
