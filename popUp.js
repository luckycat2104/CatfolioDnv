const openPopup = document.getElementById('openPopup');
        const closePopup = document.getElementById('closePopup');
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('overlay');

        openPopup.onclick = function() {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }

        closePopup.onclick = function() {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }

        overlay.onclick = function() {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }