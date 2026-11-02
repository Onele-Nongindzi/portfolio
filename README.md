# Onele Nongindzi: Portfolio

Personal portfolio site. Plain HTML, CSS and JavaScript, with no build step.

## Files

```
index.html       Page structure (you rarely need to touch this)
css/style.css    All styling. Colours and fonts are set once at the top in :root
js/content.js    ALL THE TEXT: about, projects, experience, skills, education, contact
js/main.js       Builds the page from content.js and runs the demo card
```

## Editing

- **Change any text:** edit `js/content.js`, save, and refresh the browser.
- **Add a project or job:** copy an existing `{ ... }` block in `projects` or `experience`, paste it below, and change the values. Keep the comma between blocks.
- **Remove something:** delete its `{ ... },` block.
- **Change colours or fonts:** edit the variables at the top of `css/style.css` (`--accent`, `--bg`, `--display` and so on). Dark-mode colours are in the two blocks just below them.

## Preview

Open `index.html` in a browser, or use the VS Code **Live Server** extension so it reloads automatically when you save.

## Publish on GitHub Pages

Copy these files into your `portfolio` repo, replacing the old ones, then run:

```bash
git add -A
git commit -m "Update portfolio"
git push
```

The site updates at https://onele-nongindzi.github.io/portfolio/ within about a minute.
