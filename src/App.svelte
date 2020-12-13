<script>
    import Header from './components/Header.svelte';
    import Footer from './components/Footer.svelte'
    import Home from './components/Home.svelte'
import Progress from './components/Progress.svelte';
import Projects from './components/Projects.svelte';
import Experience from './components/Experience.svelte';
</script>
<main class="text-monospace aazar-bg-primary">
    <Header />
    <section>
        <Home />
    </section>
    <section>
        <Projects />
    </section>
    <section>
        <Experience />
    </section>
    <section>
        <Progress />
    </section>
    <Footer />
</main>

<style>
    /* div {
        background-image: 'assets/bg_2.jpg';
    } */
</style>