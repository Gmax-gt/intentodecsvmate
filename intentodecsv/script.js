const displayYerbaProducts = (start, end) => {
    fetch('productos.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1); // Skip header row
            const container = document.querySelector('.container-items');
            container.innerHTML = ''; // Clear existing content

            rows.slice(start, end).forEach(row => {
                const cols = row.split(',');
                const itemName = cols[0];
                const itemPrice = cols[1];
                const itemImage = cols[2];

                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';

                const figure = document.createElement('figure');
                const img = document.createElement('img');
                img.src = itemImage;
                img.alt = 'producto';
                figure.appendChild(img);

                const infoProductDiv = document.createElement('div');
                infoProductDiv.className = 'info-product';

                const h5 = document.createElement('h5');
                h5.textContent = itemName;

                const p = document.createElement('p');
                p.className = 'price';
                p.textContent = itemPrice;

                const button = document.createElement('button');
                button.className = 'btn-add-cart';
                button.textContent = 'Añadir al carrito';

                infoProductDiv.appendChild(h5);
                infoProductDiv.appendChild(p);
                infoProductDiv.appendChild(button);

                itemDiv.appendChild(figure);
                itemDiv.appendChild(infoProductDiv);

                container.appendChild(itemDiv);
            });
        });
};
    