<script>
    import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'sveltestrap';

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>
<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</svelte:head>
<Navbar class="aazar-bg-2 sticky-top" light expand="md">
    <NavbarBrand href="/" class="h1 mb-0">H1re4azar</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ml-auto" navbar>
        <NavItem>
        <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#experience">Experience</NavLink>
          </NavItem>
        <NavItem>
        <NavLink href="https://www.github.com/44za12" target="_blank">GitHub</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="https://www.hackerrank.com/44za12" target="_blank">HackerRank</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="https://www.linkedin.com/in/iAazar" target="_blank">LinkedIn</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/aazar_resume.pdf" download>Resume</NavLink>
        </NavItem>
    </Nav>
    </Collapse>
</Navbar>
<style>
</style>