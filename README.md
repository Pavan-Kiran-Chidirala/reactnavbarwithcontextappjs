In this project, let's build a **Navbar with Context** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-output.gif" alt="navbar with context output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-home-sm-outputs.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - About](https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-about-sm-outputs.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Not Found](https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-not-found-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home Light Theme](https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-home-light-theme-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home Dark Theme](https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-home-dark-theme-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - About Light Theme](https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-about-light-theme-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - About Dark Theme](https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-about-dark-theme-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Not Found Light Theme](https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-not-found-light-theme-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Not Found Dark Theme](https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-not-found-dark-theme-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the app should consists of light theme
- When the dark theme image is clicked in the respective route
  - The dark theme image should be changed to light theme image
  - The app should be changed to dark mode
- when the light theme image is clicked in the Respective route
  - The light theme image should be changed to dark theme image
  - The app should be changed to light mode
- The Theme Context has an object as a value with the following properties
  - `isDarkTheme` - this key is used to change the theme
  - `toggleTheme` - this method is used to update the value of the `isDarkTheme`
- When an undefined path is provided in the URL then the page should navigate to the NotFound Route

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-component-structure-breakdown-home.png" alt="component structure breakdown Home" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/navbar-with-context-component-structure-breakdown-about.png" alt="component structure breakdown About" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/App.js`
- `src/components/Home/index.js`
- `src/components/Home/index.css`
- `src/components/About/index.js`
- `src/components/About/index.css`
- `src/components/Navbar/index.js`
- `src/components/Navbar/index.css`
- `src/components/NotFound/index.css`
- `src/components/NotFound/index.js`

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- The **Home** image for light theme and dark theme should have the alt attribute value as `home`
- The **About** image for light theme and dark theme should have the alt attribute value as `about`
- The **Website Logo** image for light theme and dark theme should have the alt attribute value as `website logo`
- The **Theme** image for light theme and dark theme should have the alt attribute value as `theme`
- The Theme button should have the testid as `theme`

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/home-light-img.png](https://assets.ccbp.in/frontend/react-js/home-light-img.png)

- [https://assets.ccbp.in/frontend/react-js/home-dark-img.png](https://assets.ccbp.in/frontend/react-js/home-dark-img.png)

- [https://assets.ccbp.in/frontend/react-js/about-light-img.png](https://assets.ccbp.in/frontend/react-js/about-light-img.png)

- [https://assets.ccbp.in/frontend/react-js/about-dark-img.png](https://assets.ccbp.in/frontend/react-js/about-dark-img.png)

- [https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png](https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png)

- [https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png](https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png)

- [https://assets.ccbp.in/frontend/react-js/light-theme-img.png](https://assets.ccbp.in/frontend/react-js/light-theme-img.png)

- [https://assets.ccbp.in/frontend/react-js/dark-theme-img.png](https://assets.ccbp.in/frontend/react-js/dark-theme-img.png)

- [https://assets.ccbp.in/frontend/react-js/not-found-img.png](https://assets.ccbp.in/frontend/react-js/not-found-img.png) alt should be **not found**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #333333; width: 150px; padding: 10px; color: white">Hex: #333333</div>
<div style="background-color: #dcdcdc; width: 150px; padding: 10px; color: black">Hex: #dcdcdc</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
