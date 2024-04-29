% Francisco Vaquera  
% Abdiel Fritsche 

%Ejercicio 1 
-module(ejercicio_1).
-export([armonica/1]).

armonica(N) when N > 0 -> armonica_aux(N, 0).

armonica_aux(0, SumaAcumulada) -> SumaAcumulada;
armonica_aux(N, SumaAcumulada) when N > 0 -> armonica_aux(N-1, SumaAcumulada + 1/N).

%--------------------------------------------------------------
%Ejercicio 2
-module(ejercicio_2).
-export([baja_sube/1]).

baja_sube(N) ->
    descendente = generar_descendente(N, ""),
    ascendente = generar_ascendente(2, N, ""),
    lists:flatten([descendente, " ", ascendente]).

generar_descendente(0, Acumulador) -> Acumulador;
generar_descendente(N, Acumulador) when N > 0 ->
    generar_descendente(N - 1, Acumulador ++ integer_to_list(N) ++ " ").

generar_ascendente(N, Max, Acumulador) when N > Max -> Acumulador;
generar_ascendente(N, Max, Acumulador) ->
    generar_ascendente(N + 1, Max, Acumulador ++ integer_to_list(N) ++ " ").

%---------------------------------------------------------------
%Ejercicio 3
-module(ejercicio_3).
-export([fibo/1]).

fibo(0) -> 0;
fibo(1) -> 1;
fibo(N) -> fibo(N-1) + fibo(N-2).



%--------------------------------------------------------------
% Ejercicio 4

-module(ejercicio_4).
-export([fibot/1]).

fibot(N) when N >= 0 ->
    fibot(N, 0, 1).

fibot(0, A, _) ->
    A;
fibot(N, A, B) when N > 0 ->
    fibot(N - 1, B, A + B).
