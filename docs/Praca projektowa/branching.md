---
sidebar_position: 2
---

# Integracja Jira <-> Gitlab
Jakiś czas temu wprowadziliśmy integrację Jiry z naszym Gitlabem po to, aby była lepsza kontrola nad przepływem pracy dla PMów danego projektu, tak aby widzieli czy w zadaniach przy których pracujemy jest rzeczywiście jakiś progres. Integracja ta działa tylko i wyłącznie w momencie prawidłowego nazewnictwa po stronie gitlaba. W poniższym dokumencie postaram się przybliżyć Ci w jaki sposób powinieneś/naś nazywać branche, jakie wiadomości powinieneś/naś dodawać do swoich commitów oraz jak powinieneś/naś tworzyć Merge Requesty. Żadna dodatkowa konfiguracja po stronie projektu na Jirze lub w Gitlabie jest zbędna, dlatego że integracja powinna działać we wszystkich projektach na Jirze i wszystkich repozytoriach na gicie.

## Branche
Aby integracja działała prawidłowo w nazwie brancha musi znaleźć się numerek zadania z Jiry, w prosty sposób można użyć toola który jest widoczny w jirze i po prostu skopiować nazwę branchą i utworzyć gałąź z taką samą nazwą w gicie.

![Gitlab <-> Jira 1 ](/img/docs/gitlab_jira_1.png)

Na potrzeby tego artykułu będę posługiwał się zadaniem o numerku LAW-18, a moja cała nazwa brancha będzie wyglądała następująco:

LAW-18-renderowanie-przed-akcja-hovera.

Zacznę więc od utworzenia takiego brancha w Gitlab UI
![Gitlab <-> Jira 2 ](/img/docs/gitlab_jira_2.png)

Bezpośrednio po utworzeniu nowej gałęzi przechodząc znowu do mojego zadanka na Jirze jestem w stanie zauważyć informację o tym, że została utworzona nowa gałąź o tej nazwie i jest ona "przypisana" do zadania które realizuję:
![Gitlab <-> Jira 3 ](/img/docs/gitlab_jira_3.png)

Po kliknięciu w "1 gałąź / 1 branch" (w trakcie tworzenia dokumentu zmieniłem język Jiry na angielski, stąd różnica w nazewnictwie) otwiera się popup w którym jest nieco więcej informacji, gdzie mogę znaleźć informacje o tym, w jakim repozytorium został stworzony nowy branch:
![Gitlab <-> Jira 4](/img/docs/gitlab_jira_4.png)

## Commity
W przypadku commitów jest bardzo podobnie, mianowicie musimy dodać numerek zadania do wiadomości, czyli w moim przypadku będzie to:

git commit -m 'LAW-18 gitlab<-> jira test commit'

Po dodaniu tego commitu w Jirze bardzo ładnie widać kto i kiedy dodał commit a także ilu plików dotknął
![Gitlab <-> Jira 5](/img/docs/gitlab_jira_5.png)

## Merge Requests
Sytuacja bardzo podobna jeśli chcę, żeby mój MR był widoczny w Jirze powinienem zastosować odpowiednie nazewnictwo:
![Gitlab <-> Jira 6](/img/docs/gitlab_jira_6.png)

Po dodaniu LAW-18 w title mojego Merge Requestu jest on automatycznie przesyłany do Jiry - widać również takie MR które zostały anulowanie:
![Gitlab <-> Jira 7](/img/docs/gitlab_jira_7.png)

## Pozostałe zakładki narzędzia w Jirze
Pozostałe zakładki, typu buildy lub release są uzależnione od konfiguracji pipelinów w repozytorium.

:::warning
    Wielkość liter w nazewnictwie branchy jest istotna, w przypadku gdy commity/branche
    mają nazwę nieprawidłową, 
    np: Law-12 lub law-12, zamiast LAW-12 
    integracja nie będzie działała prawidłowo.
:::
