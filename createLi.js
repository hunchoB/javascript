<!DOCTYPE html>
<html>

<body>

    <h1>создать список</h1>


    <script>
        let ul = document.createElement('ul');
        document.body.append(ul);
        while (true) {
            let text = prompt('Enter your string', '');
            if (text == '' || text == null) {
                break;
            }
            let li = document.createElement('li');
            li.append(document.createTextNode(text));
            ul.append(li);
        }
    </script>
</body>

</html>