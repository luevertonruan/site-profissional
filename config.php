<?php 
    /*//fonte: (Gustavo Neitzke) https://www.youtube.com/watch?v=QOeDE7nPDq0&t=29s
    $dbHost = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'db';

    $conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

    if($conexao->connect_errno)
    {
        echo "Erro";
    }
    else
    {
        echo "Conectado com sucesso";
    }*/

    /* //fonte: (CODE MEO) https://www.youtube.com/watch?v=j-NjGKLmgsw */
    try {
        $conn = new PDO('mysql:host=localhost;dbname=banco','root','QWEfarinha1979');
    } catch (PDOException $e) {
        $e->getMessage();
    }   
?>