  // Objeto con precios
        const precios = {
            hamburguesas: {
                "Clásica": 50,
                "Doble Queso": 70,
                "BBQ Especial": 90,
                "Hamburguesa Cesar": 80,
                "Rubeye a la parrilla": 150,
                "Paella de Mariscos": 120
            },
            bebidas: {
                "Coca-Cola": 20,
                "Agua": 10,
                "Limonada": 15
            }
        };
    
        // Muestra el resumen del pedido
        document.getElementById('resumenBtn').addEventListener('click', function () {
            const hamburguesa = document.getElementById('hamburguesa').value;
            const cantidad = parseInt(document.getElementById('cantidad').value, 10);
            const bebida = document.getElementById('bebida').value;
    
            if (hamburguesa && cantidad && bebida) {
                // Obtención de precios de hamburguesa y bebida
                const precioHamburguesa = precios.hamburguesas[hamburguesa];
                const precioBebida = precios.bebidas[bebida];
    
                // Calcular el total
                const total = (precioHamburguesa + precioBebida) * cantidad;
    
                // Mostrar el resumen con el precio total
                document.getElementById('detalles').textContent = 
                    `Has pedido ${cantidad} ${hamburguesa}(s) con ${bebida}. El precio total es $${total.toFixed(2)} MXN.`;
                
                document.getElementById('resumen').classList.remove('hidden');
                document.getElementById('confirmacion').classList.add('hidden');
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    
        // Confirmación del pedido
        document.getElementById('confirmarBtn').addEventListener('click', function () {
            document.getElementById('resumen').classList.add('hidden');
            document.getElementById('confirmacion').classList.remove('hidden');

             // Limpiar el formulario
            document.getElementById('hamburguesa').value = '';
            document.getElementById('cantidad').value = '';
            document.getElementById('bebida').value = '';
            document.getElementById('detalles').textContent = '';

        });
    