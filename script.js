    const saveContactBtn = document.getElementById('saveContactBtn');
    const epicBtn = document.getElementById('epicBtn');
    const epicLabel = document.getElementById('epicLabel');

    saveContactBtn.addEventListener('click', () => {
      const vcard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'N:Gil;Jesús;;;',
        'FN:Jesús Gil',
        'TEL;TYPE=CELL:+584121844043',
        'EMAIL;TYPE=INTERNET:usogeneral758@gmail.com',
        'URL:https://www.instagram.com/jrg20_u/',
        'NOTE:Conectemos para planes, charlas o partidas.',
        'END:VCARD'
      ].join('\\r\\n');

      const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'jesus-gil-social-card.vcf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    });

    epicBtn.addEventListener('click', async () => {
      const originalText = epicLabel.textContent;

      try {
        await navigator.clipboard.writeText('jrgil758');
        epicLabel.textContent = '¡ID Copiado! ✓';
      } catch (error) {
        epicLabel.textContent = 'No se pudo copiar';
      }

      setTimeout(() => {
        epicLabel.textContent = originalText;
      }, 2000);
    });
