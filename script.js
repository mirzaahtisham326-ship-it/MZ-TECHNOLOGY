document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Doosre saare open FAQs ko band karne ke liye (Optional)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
});
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;

        // Close other open items
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const reviewsGrid = document.getElementById("reviewsGrid");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const reviews = reviewsGrid.querySelectorAll(".review-card");

    // Shuru mein kitne reviews dikhana chahte hain
    let currentReviewsShown = 4;

    // Function to show reviews
    function showReviews(limit) {
        for (let i = 0; i < reviews.length; i++) {
            if (i < limit) {
                reviews[i].classList.add("show");
            } else {
                reviews[i].classList.remove("show");
            }
        }
    }

    // Initial display
    showReviews(currentReviewsShown);

    // Load More button click event
    loadMoreBtn.addEventListener("click", function () {
        // Kitne mazeed reviews load karna chahte hain
        currentReviewsShown += 4;

        // Agar saare reviews load ho gaye hain to button ko disable karein
        if (currentReviewsShown >= reviews.length) {
            loadMoreBtn.textContent = "All Reviews Loaded";
            loadMoreBtn.disabled = true;
            loadMoreBtn.style.opacity = "0.5";
            loadMoreBtn.style.cursor = "not-allowed";
        }

        // Show updated count of reviews
        showReviews(currentReviewsShown);
    });
});
function openModal(id) {
    document.getElementById(id).style.display = "block";
    document.body.style.overflow = "hidden"; // Scroll rokne ke liye
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
}

// Modal ke bahar click karne se close ho jaye
window.onclick = function (event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}