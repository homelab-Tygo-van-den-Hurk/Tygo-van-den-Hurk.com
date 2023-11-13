document.write( // Copy froom contents.html until we find a way to fetch this instead.
`
<style type="text/css" scoped>@import url(/assets/code/base-kit/top-part/content.css);</style>
<section id="top-section">
    <!-- Give the title and text below it contents using the 'content' css attribute. -->
    <!-- Change the top background using the css attribute. -->
    <div id="top-container">
        <h1 id="top-h1">Title</h1>
        <p id="top-p">Text below the title.</p>
        <button id="top-button" type="button" class="shadow rounded">Let&rsquo;s talk!</button>
    </div>
    <script type="module" src="/assets/code/base-kit/contact-form/module.js"></script>
    <script type="module">
        const id = "top-button"
        import { showContactMeForm } from '/assets/code/base-kit/contact-form/module.js';
        const button = document.getElementById(id);
        // button.addEventListener('click', showContactMeForm);
        button.addEventListener('click', () => {
            console.log("clicked: \'"+id+"\'!");
        });
    </script>
</section>
`);