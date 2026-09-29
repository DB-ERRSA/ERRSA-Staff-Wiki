document.addEventListener("DOMContentLoaded", () => {
    const roleOrder = ["MOD", "ADMIN", "DEV", "SERVER LEAD"];

    document.querySelectorAll(".md-tag").forEach(tag => {
        const name = tag.textContent.trim();
        const roleIndex = roleOrder.indexOf(name);

        if (roleIndex === -1) return;

        // Apply role color
        tag.classList.add(`tag-${name.toLowerCase().replaceAll(" ", "-")}`);

        // Store the role's position for sorting
        tag.dataset.roleOrder = roleIndex;
    });

    document.querySelectorAll(".md-tags").forEach(container => {
        const tags = Array.from(container.querySelectorAll(".md-tag"));

        tags.sort((a, b) => {
            return Number(a.dataset.roleOrder) - Number(b.dataset.roleOrder);
        });

        tags.forEach(tag => container.appendChild(tag));
    });
});