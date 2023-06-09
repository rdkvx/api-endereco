const   route = 'endereco',
        repository = 'ENDERECO_REPOSITORY',
        dataSource = 'DATA_SOURCE',
        payloadInvalido = 'payload invalido',
        erroInterno = 'erro interno',
        bairroErr = 'bairro precisa ter no minimo 2 caracteres e no maximo 100',
        cepErr = 'cep invalido, envie o cep em 8 digitos(sem traço)',
        complementoErr = 'complemento precisa ter no minimo 2 caracteres e no maximo 100',
        dddErr = 'ddd precisa ter 2 caracteres numericos',
        giaErr = 'gia precisa ter no minimo 2 caracteres e no maximo 100',
        ibgeErr = 'ibge precisa ter no minimo 2 caracteres e no maximo 100',
        localidadeErr = 'localidade precisa ter no minimo 2 caracteres e no maximo 100',
        logradouroErr = 'logradouro precisa ter no minimo 2 caracteres e no maximo 100',
        siafiErr = 'siaf precisa ter no minimo 2 caracteres e no maximo 100',
        ufErr = 'uf precisa de apenas 2 caracteres e sem digitos numéricos',
        enderecoErr = 'endereco nao encontrado',
        enderecoService = 'CepService',
        shouldBeDefined = 'should be defined'

export let utilsEndereco = {
    route,
    repository,
    dataSource,
    payloadInvalido,
    erroInterno,
    bairroErr,
    cepErr,
    complementoErr,
    dddErr,
    giaErr,
    ibgeErr,
    localidadeErr,
    logradouroErr,
    siafiErr,
    ufErr,
    enderecoErr,
    enderecoService,
    shouldBeDefined
}