import os
import subprocess

# -------- Configurações --------
USUARIO = "Tailor777"      # Seu usuário GitHub
REPO = "portfolio"           # Nome do repositório GitHub
MENSAGEM_COMMIT = "Primeiro commit do portfólio"

def run_cmd(cmd):
    result = subprocess.run(cmd, shell=True)
    if result.returncode != 0:
        print(f"Erro ao executar: {cmd}")
        exit(1)

# Inicializa Git se não existir
if not os.path.exists(".git"):
    print("Inicializando repositório Git...")
    run_cmd("git init")
else:
    print("Repositório Git já existe.")

# Adiciona arquivos
print("Adicionando arquivos...")
run_cmd("git add .")

# Commit
print("Fazendo commit...")
run_cmd(f'git commit -m "{MENSAGEM_COMMIT}"')

# Conecta ao remoto
print("Conectando ao repositório remoto...")
run_cmd(f"git remote add origin https://github.com/TAIL0R777")

# Branch main e push
print("Criando branch main e enviando para GitHub...")
run_cmd("git branch -M main")
run_cmd("git push -u origin main")

print("✅ Portfólio enviado com sucesso!")
print("https://github.com/TAIL0R777")
print("Não esqueça de ativar o GitHub Pages na branch main / root no repositório.")
