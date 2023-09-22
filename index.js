
document.getElementById('createBtn').addEventListener('click', function () {
    copyTextToClipboard('createBtn');
  });
  
document.getElementById('solveBtn').addEventListener('click', function () {
    copyTextToClipboard('solveBtn');
});

document.getElementById('sendBtn').addEventListener('click', function () {
    copyTextToClipboard('sendBtn');
});

document.getElementById('closeBtn').addEventListener('click', function () {
    copyTextToClipboard('closeBtn');
  });
  
document.getElementById('askBtn').addEventListener('click', function () {
    copyTextToClipboard('askBtn');
});

document.getElementById('passBtn').addEventListener('click', function () {
    copyTextToClipboard('passBtn');
});

function getTasksTicket(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];
        const tabUrl = currentTab.url;
        // Извлекаем 6 цифр из URL
        const match = tabUrl.match(/\/(\d{6})\//);
        var tasks_id = match ? match[1] : null;
        if (tasks_id == null){
            tasks_id = "XXXXXX";
        }
        callback(tasks_id);
    })
}


function copyTextToClipboard(option) {

    

    switch (option)
    {
      case 'createBtn':
        getTasksTicket(function (tasks_id){navigator.clipboard.writeText('Здравствуйте!\nДата-центр O2XYGEN свидетельствует Вам свое уважение и информирует, что по вашему обращению открыта заявка №'+ tasks_id +'.\nКак только по вашему запросу появится информация мы Вам сообщим.');})
        break;
      case 'closeBtn':
        getTasksTicket(function (tasks_id){navigator.clipboard.writeText('Здравствуйте!\nДата-центр O2XYGEN свидетельствует Вам свое уважение и информирует, что заявка №'+ tasks_id +' закрыта.\nЕсли проблема решена и у вас больше не осталось вопросов по этой заявке, можете не отвечать на это письмо.');})
        break;
      case 'solveBtn':
        getTasksTicket(function (tasks_id){navigator.clipboard.writeText('Здравствуйте!\nДата-центр O2XYGEN свидетельствует Вам своё уважение и информирует о том, что по заявке №'+ tasks_id +' появилась дополнительная информация:\n');})
        break;
      case 'sendBtn':
        getTasksTicket(function (tasks_id){navigator.clipboard.writeText('Здравствуйте!\nИнформация принята и передана ответственным специалистам.');})
        break;
      case 'askBtn':
        getTasksTicket(function (tasks_id){navigator.clipboard.writeText('Здравствуйте!\nЕсли у Вас не осталось больше вопросов, можем ли мы закрыть данную заявку?');})
        break;
      case 'passBtn':
        getTasksTicket(function (tasks_id){navigator.clipboard.writeText('Здравствуйте!\nПропуск №'+ tasks_id +' оформлен.');})
        break;
    }
}
