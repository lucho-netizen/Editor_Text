tinymce.init({
	selector: '#editor',
	language: 'es_MX',
	branding: false,
	menubar: false,
	toolbar:
		'undo redo | styles forecolor | bold italic | codesample | link | alignleft aligncenter alignright alignjustify | outdent indent | image| table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
	statusbar: true,
	plugins: 'image | codesample | table | link',
	
});

document.getElementById("formulario").addEventListener("submit", function (event) {
	event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
  
	const editorContent = tinymce.get("editor").getContent(); // Obtiene el contenido del editor TinyMCE
  
	const printWindow = window.open("", "_blank"); // Abre una nueva ventana en blanco
  
	printWindow.document.open();
	printWindow.document.write(`
	  <html>
		<head>
		  <title>Luis Jose</title>
		</head>
		<body>
		  <div>${editorContent}</div>
		</body>
	  </html>
	`);
	printWindow.document.close();
  
	printWindow.print(); // Abre el diálogo de impresión del navegador
  });
  