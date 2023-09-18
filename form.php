<?php
    /* //fonte: (CODE MEO) https://www.youtube.com/watch?v=j-NjGKLmgsw */
    include_once('config.php');

    $nome=$_POST['nome'];
    $sobrenome=$_POST['sobrenome'];
    $email=$_POST['email'];
    $msg=$_POST['msg'];

    $sql = 'INSERT INTO form(nome,sobrenome,email,msg) VALUES(:nome,:sobrenome,:email,:msg)';
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nome',$nome);
    $stmt->bindParam(':sobrenome',$sobrenome);
    $stmt->bindParam(':email',$email);
    $stmt->bindParam(':msg',$msg);
    $stmt->execute();


  /*//fonte: (Gustavo Neitzke) https://www.youtube.com/watch?v=QOeDE7nPDq0&t=29s
  if(isset($_POST['submit']))
  {
    print_r($_POST['nome']);
    print_r($_POST['sobrenome']);
    print_r($_POST['email']);
    print_r($_POST['msg']);
  
    include_once('config.php');

    $nome=$_POST['nome'];
    $sobrenome=$_POST['sobrenome'];
    $email=$_POST['email'];
    $msg=$_POST['msg'];

    $result = mysqli_query($conexao,"INSERT INTO form(nome,sobrenome,email,msg) 
    VALUES('$nome','$sobrenome','$email','$msg')");
  }*/

    
    

?>