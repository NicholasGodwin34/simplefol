// scripts/cardStack.js
export function initCardStack() {
  const stacks = document.querySelectorAll('.card-stack');

  stacks.forEach(stack => {
    stack.addEventListener('click', function(e) {
      // Prevent triggering when clicking child elements
      if (e.target === this) { 
        this.classList.toggle('expanded');
      }
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (!stack.contains(e.target)) {
        stack.classList.remove('expanded');
      }
    });
  });
}