select funcionarios.*, departamentos.*
from funcionarios inner join departamentos on 
funcionarios.id_departamento = departamentos.id
where departamentos.nome = 'Marketing'