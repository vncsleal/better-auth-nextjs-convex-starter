/**
 * Brazilian Portuguese (pt-BR) localization for Better Auth UI
 * 
 * This is a basic set of translations. You can expand this by checking
 * the AuthLocalization type from @daveyplate/better-auth-ui for all available keys.
 * 
 * To use: Add `localization={ptBR}` to your AuthUIProvider
 */
export const ptBR = {
  // Authentication Views
  SIGN_IN: "Entrar",
  SIGN_IN_DESCRIPTION: "Entre com sua conta",
  SIGN_UP: "Criar Conta",
  SIGN_UP_DESCRIPTION: "Crie sua nova conta",
  SIGN_OUT: "Sair",
  FORGOT_PASSWORD: "Esqueci a Senha",
  FORGOT_PASSWORD_DESCRIPTION: "Recupere o acesso à sua conta",
  RESET_PASSWORD: "Redefinir Senha",
  RESET_PASSWORD_DESCRIPTION: "Crie uma nova senha",
  MAGIC_LINK: "Link Mágico",
  MAGIC_LINK_DESCRIPTION: "Entre sem senha por e-mail",

  // Form Fields
  EMAIL: "E-mail",
  EMAIL_PLACEHOLDER: "seu@email.com",
  PASSWORD: "Senha",
  PASSWORD_PLACEHOLDER: "Digite sua senha",
  CURRENT_PASSWORD: "Senha Atual",
  NEW_PASSWORD: "Nova Senha",
  NAME: "Nome",
  NAME_PLACEHOLDER: "Seu nome completo",
  USERNAME: "Nome de Usuário",

  // Actions
  CONTINUE: "Continuar",
  CANCEL: "Cancelar",
  DELETE: "Excluir",
  LINK: "Vincular",
  UNLINK: "Desvincular",
  REVOKE: "Revogar",
  ACCEPT: "Aceitar",
  REJECT: "Recusar",

  // Success Messages
  FORGOT_PASSWORD_EMAIL: "Verifique seu e-mail para redefinir sua senha.",
  RESET_PASSWORD_SUCCESS: "Sua senha foi redefinida com sucesso!",
  MAGIC_LINK_EMAIL: "Verifique seu e-mail para o link de acesso!",
  DELETE_ACCOUNT_SUCCESS: "Sua conta foi excluída permanentemente.",

  // Settings
  SETTINGS: "Configurações",
  SETTINGS_DESCRIPTION: "Gerencie as configurações da sua conta.",
  ACCOUNT: "Conta",
  ACCOUNT_SETTINGS: "Configurações da Conta",
  ACCOUNT_SETTINGS_DESCRIPTION: "Gerencie suas informações pessoais e preferências.",
  SECURITY: "Segurança",
  SECURITY_SETTINGS: "Configurações de Segurança",
  SECURITY_SETTINGS_DESCRIPTION: "Gerencie suas configurações de segurança e privacidade.",
  AVATAR: "Foto de Perfil",
  AVATAR_DESCRIPTION: "Atualize sua foto de perfil.",
  UPDATE_AVATAR: "Atualizar Foto",
  REMOVE_AVATAR: "Remover Foto",

  // Providers
  PROVIDERS: "Contas Vinculadas",
  PROVIDERS_DESCRIPTION: "Gerencie suas contas de redes sociais vinculadas.",
  SIGN_IN_WITH: "Entrar com",
  OR: "OU",
  CONNECT: "Conectar",
  DISCONNECT: "Desconectar",

  // Sessions
  SESSIONS: "Sessões Ativas",
  SESSIONS_DESCRIPTION: "Gerencie suas sessões ativas em diferentes dispositivos.",
  CURRENT_SESSION: "Esta Sessão",
  ACTIVE_SESSIONS: "Sessões Ativas",
  REVOKE_SESSION: "Encerrar Sessão",
  LAST_ACTIVE: "Última atividade",

  // Delete Account
  DELETE_ACCOUNT: "Excluir Conta",
  DELETE_ACCOUNT_DESCRIPTION: "Exclua permanentemente sua conta e todos os seus dados.",
  DELETE_ACCOUNT_CONFIRMATION: "Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.",
  DELETE_ACCOUNT_NOT_FRESH: "Faça logout e login novamente para excluir sua conta.",
  CONFIRM_DELETE: "Confirmar Exclusão",

  // Two Factor
  TWO_FACTOR: "Autenticação de Dois Fatores",
  TWO_FACTOR_DESCRIPTION: "Adicione uma camada extra de segurança à sua conta.",
  TWO_FACTOR_ENABLED: "2FA Ativado",
  TWO_FACTOR_DISABLED: "2FA Desativado",
  ENABLE_TWO_FACTOR: "Ativar 2FA",
  DISABLE_TWO_FACTOR: "Desativar 2FA",
  TWO_FACTOR_CODE: "Código de Verificação",
  TWO_FACTOR_CODE_PLACEHOLDER: "000000",
  VERIFY_CODE: "Verificar Código",
  BACKUP_CODES: "Códigos de Backup",
  BACKUP_CODES_DESCRIPTION: "Guarde estes códigos em um local seguro. Você pode usá-los para acessar sua conta se perder o acesso ao seu dispositivo de autenticação.",

  // Organizations
  ORGANIZATION: "Organização",
  ORGANIZATIONS: "Organizações",
  ORGANIZATIONS_DESCRIPTION: "Gerencie suas organizações e participações.",
  CREATE_ORGANIZATION: "Criar Organização",
  CREATE_ORGANIZATION_DESCRIPTION: "Crie uma organização para colaborar com outros usuários.",
  ORGANIZATION_NAME: "Nome da Organização",
  ORGANIZATION_NAME_PLACEHOLDER: "Nome da sua organização",
  ORGANIZATION_SLUG: "URL da Organização",
  ORGANIZATION_SLUG_PLACEHOLDER: "url-da-organizacao",
  ORGANIZATION_LOGO: "Logo da Organização",
  DELETE_ORGANIZATION: "Excluir Organização",
  DELETE_ORGANIZATION_DESCRIPTION: "Exclua permanentemente esta organização e todos os seus dados.",
  PERSONAL_ACCOUNT: "Conta Pessoal",
  SWITCH_ORGANIZATION: "Trocar Organização",
  NO_ORGANIZATIONS: "Você ainda não tem nenhuma organização.",

  // Members
  MEMBERS: "Membros",
  MEMBERS_DESCRIPTION: "Gerencie os membros e convites da sua organização.",
  INVITE_MEMBER: "Convidar Membro",
  INVITE_MEMBER_DESCRIPTION: "Convide outras pessoas para se juntarem à sua organização.",
  MEMBER_EMAIL: "E-mail do Membro",
  MEMBER_EMAIL_PLACEHOLDER: "email@exemplo.com",
  ROLE: "Função",
  OWNER: "Proprietário",
  ADMIN: "Administrador",
  MEMBER: "Membro",
  REMOVE_MEMBER: "Remover Membro",
  UPDATE_MEMBER_ROLE: "Atualizar Função",

  // Invitations
  ACCEPT_INVITATION: "Aceitar Convite",

  // API Keys
  API_KEYS: "Chaves de API",
  API_KEYS_DESCRIPTION: "Gerencie suas chaves de API para integração com outros sistemas.",
  CREATE_API_KEY: "Criar Chave de API",
  API_KEY_NAME: "Nome da Chave",
  API_KEY_NAME_PLACEHOLDER: "Nome descritivo para a chave",
  API_KEY_CREATED: "Chave de API criada com sucesso!",
  API_KEY_DELETED: "Chave de API excluída com sucesso!",
  NEVER_EXPIRES: "Nunca expira",
  EXPIRES_ON: "Expira em",
  DELETE_API_KEY: "Excluir Chave",
  CONFIRM_DELETE_API_KEY: "Tem certeza de que deseja excluir esta chave de API?",

  // Common
  LOADING: "Carregando...",
  COPY: "Copiar",
  COPIED: "Copiado!",
  SAVE: "Salvar",
  SAVED: "Salvo!",
  EDIT: "Editar",
  REMOVE: "Remover",
  ADD: "Adicionar",
  UPLOAD: "Enviar",
  DOWNLOAD: "Baixar",
  CLOSE: "Fechar",
  DONE: "Concluído",
  YES: "Sim",
  NO: "Não",
  OPTIONAL: "Opcional",
  REQUIRED: "Obrigatório",
  SEARCH: "Pesquisar",
  FILTER: "Filtrar",
  SORT: "Ordenar",
  VIEW: "Visualizar",
  MANAGE: "Gerenciar",
  DETAILS: "Detalhes",
  DESCRIPTION: "Descrição",
} as const;
