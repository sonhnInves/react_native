import { ActivityIndicator, Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { AppColors } from "../../shared/constants";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import { IMAGE } from "../../assets";
import { useCallback, useEffect } from "react";
import { Api } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { styles } from "./article_style";
import { formatStringToDate } from "../../ultils";

const ArticleScreen = () => {
    const nav = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();
    const isFocus = useIsFocused();

    interface Type {
        id: number
    }
    interface ItemType {
        image?: string,
        title?: string,
        content?: string,
        onPress: () => void
    }
    const id = (route.params as Type).id;
    const article = useSelector((state: RootState) => state.articleReducer).article;
    let isLoading = useSelector((state: RootState) => state.articleReducer).isLoading
    const author = article.data?.author;
    const distilleriesNews = useSelector((state: RootState) => state.distilleriesNewsReduces);
    useEffect(() => {
        if (isFocus) {
            Api.getArticle(dispatch, id)
        }
    }, [isFocus])
    console.log("---------isLoading", isLoading)
    const renderItem = (props: ItemType) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
                <View style={{ width: 250, marginRight: 6 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={props.image === null ? IMAGE.EmptyImage : { uri: props.image }}
                            style={{ height: 80, width: 100, resizeMode: "cover", marginRight: 8 }}></Image>
                        <Text numberOfLines={4} ellipsizeMode="tail" style={styles.titleItem}>
                            {props.title}
                        </Text>
                    </View>
                    <Text style={styles.contentItem}>
                        {props.content}
                    </Text>
                </View>
            </TouchableOpacity>

        );
    }
    const renderPage = () => {
        return (<ScrollView style={styles.scrollView}>
            <View>
                <Image source={article.data?.image === null ? IMAGE.EmptyImage : { uri: article.data?.image }}
                    style={styles.image} />
                <View style={{
                    transform: [{ translateY: -12 }],
                    backgroundColor: AppColors.white,
                    borderRadius: 8,
                    paddingHorizontal: 16,
                    paddingVertical: 20
                }}>
                    <Text style={styles.time}>
                        POSTED ON {formatStringToDate(article.data?.date ?? "")}
                    </Text>
                    <Text style={styles.author}>
                        by {author?.display_name}
                    </Text>
                    <Divider style={{ marginVertical: 8, width: "100%" }} />
                    <Text style={styles.title}>
                        {article.data?.title}
                    </Text>
                    <Text style={styles.description}>
                        {article.data?.description}
                    </Text>
                    <Divider style={{ marginVertical: 16, width: "100%" }} />
                    <Text style={styles.recommendedStyle}>
                        Recommended for you
                    </Text>
                    <FlatList
                        horizontal
                        data={distilleriesNews.distilleriesNews.data}
                        renderItem={(data) => {
                            const img = data.item.image;
                            const title = data.item.title;
                            const date = data.item.date;
                            const author = data.item.author?.display_name;
                            return (renderItem({
                                image: img,
                                title: title,
                                content: `POSTED ON ${formatStringToDate(date)} BY ${author}`,
                                onPress: () => {
                                    Api.resetAction(dispatch);
                                    Api.getArticle(dispatch, data.item.id);
                                }
                            }));
                        }}
                    />
                </View>
            </View>
        </ScrollView>);
    }
    return (
        isLoading ?
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    backgroundColor: AppColors.textField
                }}>
                <ActivityIndicator size={50} />
            </View> :
            <View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 8,
                    backgroundColor: AppColors.black,

                }}>
                    <Icon name="chevron-back" size={24} color={AppColors.white} onPress={() => { nav.goBack(), Api.resetAction(dispatch) }} />
                    <Text style={{ color: AppColors.white, fontSize: 20, marginLeft: 10 }}>
                        Article
                    </Text>
                </View>
                {renderPage()}
            </View>
    );
}
export default ArticleScreen;